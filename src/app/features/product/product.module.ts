import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductImgOverviewComponent } from './components/product-img-overview/product-img-overview.component';
import { ProductDetailNavbarComponent } from './components/product-detail-navbar/product-detail-navbar.component';
import { CartOverviewComponent } from './components/cart-overview/cart-overview.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductImgOverviewComponent,
    ProductDetailNavbarComponent,
    CartOverviewComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
