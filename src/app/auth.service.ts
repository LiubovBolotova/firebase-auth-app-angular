import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _firebaseAuth: AngularFireAuth, private _router: Router) {}

  public signup(email: string, password: string) {
    return this._firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password);
  }

  public login(email: string, password: string) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    this._firebaseAuth.auth.signOut().then(() => {
      this._router.navigate(['/login']);
    });
  }
}
