import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { A_PRODUCT } from '../constants/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  selectedProduct() {
    return of(A_PRODUCT);
  }
}
