import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() productList = Array(8).fill(0);
  @Input() display: 'horizontal' | 'vertical' = 'vertical';

  trackByFn(index: number) {
    return index;
  }
}
