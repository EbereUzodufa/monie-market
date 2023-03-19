import { KeyValue } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ProductBaseComponent } from '../product-base.component';
import { IProductReview, IRatingInfo } from './../../../../core/models/product';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductReviewComponent extends ProductBaseComponent {
  @Input() reviews!: IProductReview;
  constructor() {
    super();
  }

  sortRating = (
    a: KeyValue<string, IRatingInfo>,
    b: KeyValue<string, IRatingInfo>
  ): number => {
    return Number(a.key) > Number(b.key)
      ? -1
      : Number(b.key) > Number(a.key)
      ? 1
      : 0;
  };
}
