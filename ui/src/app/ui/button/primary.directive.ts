import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[appPrimaryButton]'
})
export class PrimaryDirective {
  @HostBinding('class')
  elementClass = 'btn primary'
}
