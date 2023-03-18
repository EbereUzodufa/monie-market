import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { FooterMenuComponent } from './layout/components/footer-menu/footer-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterMenuComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
})
export class PublicModule {}
