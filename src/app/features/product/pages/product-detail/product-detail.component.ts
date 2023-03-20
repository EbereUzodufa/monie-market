import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductService } from './../../../../core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  product$ = this.route.params.pipe(
    map((param) => param['id']),
    map((id) => this.productService.setSelectedProduct(id)),
    switchMap(() => this.productService.selectedProduct()),
    catchError(() => {
      alert('Ooops! Product not found or unavailible at the moment');
      this.router.navigate(['/']);
      return of(null);
    })
  );
  recommendedProducts$ = this.productService.recommendedHomeProducts();
}
