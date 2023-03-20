import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appSuptextMaskedCharacters]',
})
export class SuptextMaskedCharactersDirective implements AfterViewInit {
  private maskCharacter = '*';
  navtiveElement!: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.navtiveElement = elementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    this.navtiveElement.innerHTML = this.navtiveElement.innerHTML
      .trim()
      .split(this.maskCharacter)
      .join(`<sup>${this.maskCharacter}</sup>`);
  }
}
