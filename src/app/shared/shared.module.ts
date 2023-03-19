import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdkIconComponent } from './components/sdk-icon/sdk-icon.component';
import { SdkBadgeComponent } from './components/sdk-badge/sdk-badge.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { SuptextMaskedCharactersDirective } from './directives/suptext-masked-characters.directive';
import { ProductRatingComponent } from './components/products/product-rating/product-rating.component';
import { ExternalLinksDirective } from './directives/external-links.directive';

@NgModule({
  declarations: [
    SdkIconComponent,
    SdkBadgeComponent,
    ProductCardComponent,
    ProductListComponent,
    SuptextMaskedCharactersDirective,
    ProductRatingComponent,
    ExternalLinksDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [SdkIconComponent, SdkBadgeComponent, ProductListComponent, SuptextMaskedCharactersDirective, ProductRatingComponent],
})
export class SharedModule {}
