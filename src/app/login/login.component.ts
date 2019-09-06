import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './../custom-validators';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormValidationService } from './../form-validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public submitted: boolean = false;
  public isLoginErrorShown: boolean = false;
  public errorMassage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private _formValidationService: FormValidationService,
    private _authService: AuthService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, CustomValidators.passwordValidator, Validators.minLength(8)],
      ],
    });
  }

  public required(fieldName: string): boolean {
    return this._formValidationService.required(fieldName, this.formGroup);
  }

  public invalid(fieldName: string): boolean {
    return this.submitted && this._formValidationService.invalid(fieldName, this.formGroup);
  }

  public isEmailInvalid(): boolean {
    return this.submitted && this.formGroup.get('email').hasError('email');
  }

  public submitLoginForm() {
    this.submitted = true;
    this.isLoginErrorShown = false;
    this.errorMassage = '';

    if (this.formGroup.invalid) {
      console.log('invalid form group');
      this.errorMassage = 'wrong email or password';
      return;
    }

    if (this.formGroup.valid) {
      this._authService
        .login(this.formGroup.controls['email'].value, this.formGroup.controls['password'].value)
        .then((value) => {
          this._router.navigate(['/welcome']);
          console.log(value);
        })
        .catch((err) => {
          console.log(err);
          this.errorMassage = err;
          this.isLoginErrorShown = true;
        });
    }
  }
}
