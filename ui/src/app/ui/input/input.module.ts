import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDirective } from './base.directive';

@NgModule({
  declarations: [
    BaseDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseDirective
  ]
})
export class InputModule { }
