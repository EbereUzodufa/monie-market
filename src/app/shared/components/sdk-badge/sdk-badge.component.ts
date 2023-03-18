import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdk-badge',
  templateUrl: './sdk-badge.component.html',
  styleUrls: ['./sdk-badge.component.scss'],
})
export class SdkBadgeComponent {
  @Input() content!: string;
}
