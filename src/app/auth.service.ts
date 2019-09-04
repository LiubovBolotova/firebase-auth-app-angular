import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { first, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public fireUser: any;
  public isSignedUp: boolean = false;
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private _router: Router) {}

  public signup(email: string, password: string): void {
    this._firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Success!', value);
      })
      .catch((err) => {
        console.log('signup Something went wrong:', err.message);
      });
  }

  public login(email: string, password: string): void {
    this._firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log(value);
        this._router.navigate(['/welcome']);
      })
      .catch((err) => {
        console.log('login Something went wrong:', err.message);
      });
  }

  public isLoggedIn() {
    return this._firebaseAuth.authState.pipe(first());
  }

  public logout() {
    this._firebaseAuth.auth.signOut().then(() => {
      this._router.navigate(['/login']);
    });
  }
}
