import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IStore, ISellerInfo } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-seller-info',
  templateUrl: './product-seller-info.component.html',
  styleUrls: ['./product-seller-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductSellerInfoComponent implements OnInit {
  @Input() store!: IStore;
  @Input() sellerInfo!: ISellerInfo;
  constructor() {}

  ngOnInit(): void {}
}
