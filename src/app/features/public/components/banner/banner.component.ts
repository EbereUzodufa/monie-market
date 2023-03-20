import { Component, OnDestroy, OnInit } from '@angular/core';
import { BANNER_LIST, CATEGORY_LIST } from 'src/app/core/constants/home';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
  /**]
   * @param swipeDirection is 1 for left & -1 for right
   */
  private swipeDirection = 1;
  private interval!: any;

  bannerList = BANNER_LIST;
  selectSlideIndex = 0;
  categoryList = CATEGORY_LIST;

  durationInSeconds = 3;
  constructor() {}

  ngOnDestroy(): void {
    this.clearTimerInterval();
  }

  ngOnInit(): void {
    this.initializeTimer();
  }

  trackByFn(index: number) {
    return index;
  }

  swipeLeft() {
    if (this.selectSlideIndex + 1 < this.bannerList.length) {
      this.swipeDirection = 1;
      this.swipeSlide();
    }
  }

  swipeRight() {
    if (this.selectSlideIndex > 0) {
      this.swipeDirection = -1;
      this.swipeSlide();
    }
  }

  private swipeSlide() {
    this.selectSlideIndex = this.selectSlideIndex + this.swipeDirection;
    this.restartTimer();
  }

  private initializeTimer() {
    this.interval = setInterval(() => {
      this.startSlider();
    }, this.durationInSeconds * 1000);
  }

  private startSlider() {
    if (this.bannerList && this.bannerList.length) {
      let nextSlide = this.selectSlideIndex + 1;
      nextSlide = nextSlide < this.bannerList.length ? nextSlide : 0;
      this.selectSlideIndex = nextSlide;
    }
  }

  private clearTimerInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private restartTimer() {
    this.clearTimerInterval();
    this.initializeTimer();
  }
}
