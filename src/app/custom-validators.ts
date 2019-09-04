import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static passwordValidator(control: AbstractControl) {
    const regexp = /(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)(?=.*\W)/;
    const valid = regexp.test(control.value);
    return valid ? null : { invalidPassword: true };
  }
  // password must be at least 8 characters long
  // password should have at least one capital letter, one digit and on simbol character

  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const confirmPassword: string = control.get('repPassword').value;

    if (password !== confirmPassword) {
      control.get('repPassword').setErrors({ NoPasswordMatch: true });
    } else {
      control.get('repPassword').setErrors(null);
    }
  }
}
