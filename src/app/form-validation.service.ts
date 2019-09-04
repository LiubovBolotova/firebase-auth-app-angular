import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor(
    private db: AngularFireDatabase,
    private _authService: AuthService,
    public af: AngularFireAuth,
  ) {}

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
