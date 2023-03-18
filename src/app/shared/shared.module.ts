import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdkIconComponent } from './components/sdk-icon/sdk-icon.component';
import { SdkBadgeComponent } from './components/sdk-badge/sdk-badge.component';



@NgModule({
  declarations: [
    SdkIconComponent,
    SdkBadgeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SdkIconComponent,
    SdkBadgeComponent
  ]
})
export class SharedModule { }
