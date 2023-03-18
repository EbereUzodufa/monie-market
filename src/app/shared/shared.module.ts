import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdkIconComponent } from './components/sdk-icon/sdk-icon.component';
import { SdkBadgeComponent } from './components/sdk-badge/sdk-badge.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';



@NgModule({
  declarations: [
    SdkIconComponent,
    SdkBadgeComponent,
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SdkIconComponent,
    SdkBadgeComponent,
    ProductListComponent
  ]
})
export class SharedModule { }
