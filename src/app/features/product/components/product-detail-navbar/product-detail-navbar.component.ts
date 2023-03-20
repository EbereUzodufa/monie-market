import { Component, Input } from '@angular/core';
import { IProduct } from './../../../../core/models/product';
import { ProductService } from './../../../../core/services/product.service';

@Component({
  selector: 'app-product-detail-navbar',
  templateUrl: './product-detail-navbar.component.html',
  styleUrls: ['./product-detail-navbar.component.scss'],
})
export class ProductDetailNavbarComponent {
  @Input() product!: IProduct;
  constructor(private productService: ProductService) {}

  toggleFavorite() {
    this.product.isFavorite = !this.product.isFavorite;
    this.productService.updateProduct(this.product);
  }
}
