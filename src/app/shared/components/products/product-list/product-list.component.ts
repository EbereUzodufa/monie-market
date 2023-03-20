import { IProduct } from './../../../../core/models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() title = '';
  @Input() productList: IProduct[] = [];
  @Input() display: 'horizontal' | 'vertical' = 'vertical';

  trackByFn(index: number) {
    return index;
  }
}
