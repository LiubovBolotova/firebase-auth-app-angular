import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './../custom-validators';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormValidationService } from './../form-validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public formGroup: FormGroup;
  public submitted: boolean = false;
  public passwordMassage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _formValidationService: FormValidationService,
    private _authService: AuthService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.required, CustomValidators.passwordValidator, Validators.minLength(8)],
        ],
        repPassword: ['', Validators.required],
      },
      {
        validator: CustomValidators.passwordMatchValidator,
      },
    );
  }

  public required(fieldName: string): boolean {
    return this._formValidationService.required(fieldName, this.formGroup);
  }
  public invalid(fieldName: string): boolean {
    return this._formValidationService.invalid(fieldName, this.formGroup);
  }
  public comparePasswords(fieldName: string): boolean {
    return this.submitted && this.formGroup.get(fieldName).hasError('NoPasswordMatch');
  }

  public wrongMinLength(fieldName: string): boolean {
    return this._formValidationService.wrongMinLength(fieldName, this.formGroup);
  }

  public isEmailInvalid(): boolean {
    return this.submitted && this.formGroup.get('email').hasError('email');
  }

  public submitRegistrationForm(): void {
    this.submitted = true;

    if (this.formGroup.invalid) {
      console.log('invalid form group');
      return;
    }

    if (this.formGroup.valid) {
      this._authService.signup(
        this.formGroup.controls['email'].value,
        this.formGroup.controls['password'].value,
      );

      this._router.navigate(['/login']);
    }
  }
}
