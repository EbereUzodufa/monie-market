import { IProduct } from './../models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { from, map } from 'rxjs';
import { of } from 'rxjs';
import { PRODUCTS } from '../constants/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private selectedProduct$$ = new BehaviorSubject<IProduct | null>(null);

  getHomeProducts() {
    return of(PRODUCTS);
  }

  selectedProduct() {
    return this.selectedProduct$$.asObservable();
  }

  setSelectedProduct(id: string) {
    const product = PRODUCTS.find((rec) => rec.id === id);

    if (!product) {
      throw new Error('404');
    }
    this.selectedProduct$$.next(product);
  }

  recommendedHomeProducts() {
    return from(this.selectedProduct()).pipe(
      map((selectedProduct) => {
        if (selectedProduct) {
          // selectedProduct.isFavorite = false;
          return [
            ...PRODUCTS.filter((rec) => rec.id !== selectedProduct.id),
            selectedProduct,
          ];
        }

        return [];
      })
    );
  }

  updateProduct(product: IProduct) {
    const findIndex = PRODUCTS.findIndex((rec) => rec.id === product.id);

    if (findIndex > -1) {
      PRODUCTS[findIndex] = product;
    }
  }
}
