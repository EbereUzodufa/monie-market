import { Component, OnInit } from '@angular/core';
import { BANNER_LIST, CATEGORY_LIST } from 'src/app/core/constants/home';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  /**]
   * @param swipeDirection is 1 for left & -1 for right
   */
  private swipeDirection = 1;

  bannerList = BANNER_LIST;
  selectSlideIndex = 0;
  categoryList = CATEGORY_LIST;
  constructor() {}

  ngOnInit(): void {}

  trackByFn(index: number) {
    return index;
  }

  swipeLeft(event: Event) {
    if (this.selectSlideIndex + 1 < this.bannerList.length) {
      this.swipeDirection = 1;
      this.swipeSlide();
    }
  }

  swipeRight(event: Event) {
    if (this.selectSlideIndex > 0) {
      this.swipeDirection = -1;
      this.swipeSlide();
    }
  }

  private swipeSlide() {
    this.selectSlideIndex = this.selectSlideIndex + this.swipeDirection;
  }
}
