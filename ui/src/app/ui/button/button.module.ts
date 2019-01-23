import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrimaryDirective } from './primary.directive'

@NgModule({
  declarations: [
    PrimaryDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryDirective
  ]
})
export class ButtonModule { }
