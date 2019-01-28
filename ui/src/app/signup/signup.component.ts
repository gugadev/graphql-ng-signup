import { User } from './../models/user';
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms'
import { SignupService } from './signup.service'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  suForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private ss: SignupService
  ) {}

  public signup() {
    const user = new User
    user.email = this.email.value
    user.password = this.password.value
    this.ss.register(user).subscribe((created: User) => {
      alert('Registro exitoso')
      this.suForm.reset()
    })
  }

  ngOnInit() {
    this.suForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ], [
        this.validateEmailNotTaken.bind(this)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ])
    })
  }

  validateEmailNotTaken(ctrl: AbstractControl) {
    return (
      this
        .ss
        .checkForExists(ctrl.value)
        .pipe(map(taken => taken ? { taken: true } : null))
    )
  }

  get email(): AbstractControl {
    return this.suForm.get('email')
  }

  get password(): AbstractControl {
    return this.suForm.get('password')
  }
}
