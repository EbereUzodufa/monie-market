import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IShippingInfo } from './../../../../core/models/product';

@Component({
  selector: 'app-product-shipping-info',
  templateUrl: './product-shipping-info.component.html',
  styleUrls: ['./product-shipping-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductShippingInfoComponent {
  @Input() shippingInfo!: IShippingInfo;
}
