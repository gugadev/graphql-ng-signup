import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { SignupComponent } from './signup.component'
import { InputModule } from '../ui/input/input.module'
import { ButtonModule } from '../ui/button/button.module';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    ButtonModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
