import { ProductService } from './../../../../core/services/product.service';
import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { A_PRODUCT } from './../../../../core/constants/products';
import { IProduct, IRatingInfo } from './../../../../core/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<IProduct> = this.productService.selectedProduct();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  trackByFn(index: number) {
    return index;
  }

  originalOrder() {
    return 0;
  }
}
