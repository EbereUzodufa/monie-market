import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkIconComponent } from './sdk-icon.component';

describe('SdkIconComponent', () => {
  let component: SdkIconComponent;
  let fixture: ComponentFixture<SdkIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
