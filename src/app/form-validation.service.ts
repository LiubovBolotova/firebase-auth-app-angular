import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  public required(fieldName: string, formGroup: FormGroup) {
    return formGroup.get(fieldName).hasError('required') && formGroup.get(fieldName).touched;
  }

  public invalid(fieldName: string, formGroup: FormGroup) {
    return (
      formGroup.get(fieldName).hasError('invalidPassword') &&
      formGroup.get(fieldName).dirty &&
      !this.required(fieldName, formGroup) &&
      !this.wrongMinLength(fieldName, formGroup)
    );
  }

  public wrongMinLength(fieldName: string, formGroup: FormGroup) {
    return (
      formGroup.controls[fieldName].value !== '' &&
      formGroup.controls[fieldName].errors &&
      formGroup.controls[fieldName].errors.minlength
    );
  }
}
