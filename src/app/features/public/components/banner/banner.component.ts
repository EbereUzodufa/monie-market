import { Component, OnInit } from '@angular/core';
import { BANNER_LIST, CATEGORY_LIST } from 'src/app/core/constants/home';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  bannerList = BANNER_LIST;
  selectSlideIndex = 0;
  diff = 1;
  categoryList = CATEGORY_LIST;
  constructor() {}

  ngOnInit(): void {}

  selectSlide(index: number) {
    if (index + 1 > 2) {
      this.diff = -1;
    } else if (index === 0) {
      this.diff = 1;
    }

    this.selectSlideIndex = index + this.diff;
  }

  trackByFn(index: number) {
    return index;
  }
}
