import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailNavbarComponent } from './product-detail-navbar.component';

describe('ProductDetailNavbarComponent', () => {
  let component: ProductDetailNavbarComponent;
  let fixture: ComponentFixture<ProductDetailNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
