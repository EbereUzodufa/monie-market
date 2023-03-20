import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSellerInfoComponent } from './product-seller-info.component';

describe('ProductSellerInfoComponent', () => {
  let component: ProductSellerInfoComponent;
  let fixture: ComponentFixture<ProductSellerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSellerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSellerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
