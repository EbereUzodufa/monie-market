import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkBadgeComponent } from './sdk-badge.component';

describe('SdkBadgeComponent', () => {
  let component: SdkBadgeComponent;
  let fixture: ComponentFixture<SdkBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
