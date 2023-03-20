import { IProduct } from './../../../../core/models/product';
import { ProductService } from './../../../../core/services/product.service';
import { APP_ROUTES } from './../../../../app.routes';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: IProduct;
  @Input() isEven = false;
  readonly productRoute = `/${APP_ROUTES.Product}`;

  constructor(private productService: ProductService) {}

  toggleFavorite(event: Event) {
    event.stopImmediatePropagation();
    this.product.isFavorite = !this.product.isFavorite;
    this.productService.updateProduct(this.product);
  }
}
