import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  constructor() {
    fromEvent(window, 'scroll')
      .pipe(
        debounceTime(10),
        tap(() => {
          this.isScrolled = window.pageYOffset > 10;
        })
      )

      .subscribe();
  }

  ngOnInit(): void {}
}
