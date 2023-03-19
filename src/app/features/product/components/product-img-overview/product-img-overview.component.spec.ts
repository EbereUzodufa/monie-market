import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImgOverviewComponent } from './product-img-overview.component';

describe('ProductImgOverviewComponent', () => {
  let component: ProductImgOverviewComponent;
  let fixture: ComponentFixture<ProductImgOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImgOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImgOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
