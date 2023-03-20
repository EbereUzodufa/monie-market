import { IProduct } from './../../../../core/models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-img-overview',
  templateUrl: './product-img-overview.component.html',
  styleUrls: ['./product-img-overview.component.scss'],
})
export class ProductImgOverviewComponent {
  @Input() product!: IProduct;
}
