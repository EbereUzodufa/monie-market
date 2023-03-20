import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IProductFeature } from 'src/app/core/models/product';
import { ProductBaseComponent } from '../product-base.component';

@Component({
  selector: 'app-product-features',
  templateUrl: './product-features.component.html',
  styleUrls: ['./product-features.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductFeaturesComponent extends ProductBaseComponent {
  @Input() features!: IProductFeature;
  constructor() {
    super();
  }
}
