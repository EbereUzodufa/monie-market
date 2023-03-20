import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sdk-icon',
  templateUrl: './sdk-icon.component.html',
  styleUrls: ['./sdk-icon.component.scss'],
})
export class SdkIconComponent {
  @Input() icon!: string;
  @Input() isFilled = false;
}
