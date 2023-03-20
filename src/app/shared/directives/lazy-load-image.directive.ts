import {
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appLazyLoadImage]',
})
export class LazyLoadImageDirective {
  @HostBinding('attr.src') srcAttr: string | null = null;
  @HostBinding('attr.srcset') srcSetAttr: string | null = null;
  @Input() src!: string;
  @Input()
  srcset!: string;
  constructor(private el: ElementRef) {
    this.el.nativeElement.setAttribute('loading', 'lazy');
  }

  ngAfterContentInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }
  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const observerObs = new IntersectionObserver((obs) => {
      obs.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          observerObs.unobserve(this.el.nativeElement);
        }
      });
    });
    observerObs.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.srcAttr = this.src;
    this.srcSetAttr = this.srcset;
  }
}
