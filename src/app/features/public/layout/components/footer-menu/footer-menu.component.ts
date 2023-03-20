import { Component, OnInit } from '@angular/core';
import { MOBILE_FOOTER_MENU } from '../../../../../core/constants/nav';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent {
  navList = MOBILE_FOOTER_MENU;
  selectedIndex = 0;

  trackByFn(index: number) {
    return index;
  }
}
