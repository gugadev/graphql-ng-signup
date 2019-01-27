import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { SignupComponent } from './signup.component'
import { InputModule } from '../ui/input/input.module'
import { ButtonModule } from '../ui/button/button.module'
import { SignupService } from './signup.service'

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule
  ],
  exports: [
    SignupComponent
  ],
  providers: [SignupService]
})
export class SignupModule { }
