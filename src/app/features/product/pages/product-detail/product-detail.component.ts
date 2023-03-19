import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  reviewSummary = [
    'Product in good condition',
    'Very fast delivery',
    'Fast seller response',
  ];

  constructor() {}

  ngOnInit(): void {}
}
