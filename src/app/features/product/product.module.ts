import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductImgOverviewComponent } from './components/product-img-overview/product-img-overview.component';
import { ProductDetailNavbarComponent } from './components/product-detail-navbar/product-detail-navbar.component';
import { CartOverviewComponent } from './components/cart-overview/cart-overview.component';
import { ProductFeaturesComponent } from './components/product-features/product-features.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductShippingInfoComponent } from './components/product-shipping-info/product-shipping-info.component';
import { ProductSellerInfoComponent } from './components/product-seller-info/product-seller-info.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { ShippingArrivalPipe } from './pipes/shipping-arrival.pipe';
import { CountFormatterPipe } from './pipes/count-formatter.pipe';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductImgOverviewComponent,
    ProductDetailNavbarComponent,
    CartOverviewComponent,
    ProductFeaturesComponent,
    ProductDescriptionComponent,
    ProductShippingInfoComponent,
    ProductSellerInfoComponent,
    ProductReviewComponent,
    ShippingArrivalPipe,
    CountFormatterPipe,
  ],
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
