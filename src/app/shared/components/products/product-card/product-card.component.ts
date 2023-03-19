import { APP_ROUTES } from './../../../../app.routes';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() isEven = false;
  readonly productRoute = `/${APP_ROUTES.Product}`;
}
