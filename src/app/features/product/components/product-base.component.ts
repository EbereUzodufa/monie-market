import { Directive } from '@angular/core';

@Directive()
export abstract class ProductBaseComponent {
  trackByFn(index: number) {
    return index;
  }

  originalOrder() {
    return 0;
  }
}
