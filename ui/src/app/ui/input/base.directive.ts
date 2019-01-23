import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBaseInput]'
})
export class BaseDirective {

  @HostBinding('class')
  elementClass = 'txt txt-base'
}
