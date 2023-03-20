import { Component } from '@angular/core';
import { ProductService } from './../../../../core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products$ = this.productService.getHomeProducts();
  constructor(private productService: ProductService) {}
}
