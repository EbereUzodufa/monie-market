import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDescriptionComponent {
  @Input() description: string[] = [];
  showLess = false;

  toggleShow() {
    this.showLess = !this.showLess;
  }
}
