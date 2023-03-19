import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[target=_blank]',
})
export class ExternalLinksDirective {
  @HostBinding('attr.rel') rel = 'noopener noreferrer';
}
