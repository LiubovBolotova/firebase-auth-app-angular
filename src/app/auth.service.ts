import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { first, tap, map, take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoginErrorShown$$ = new Subject<boolean>();

  private _isSignInErrorShown$$ = new Subject<boolean>();

  constructor(private _firebaseAuth: AngularFireAuth, private _router: Router) {}

  public signup(email: string, password: string): void {
    this._firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Success!', value);
      })
      .catch((err) => {
        this._isSignInErrorShown$$.next(true);
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
        this._isLoginErrorShown$$.next(true);
        console.log('login Something went wrong:', err.message);
      });
  }

  public isLoggedIn() {
    return this._firebaseAuth.authState.pipe(first()).pipe(
      tap((user) => {
        if (user) {
          return true;
        } else {
          this._router.navigate(['/login']);
        }
      }),
    );
  }

  public logout() {
    this._firebaseAuth.auth.signOut().then(() => {
      this._router.navigate(['/login']);
    });
  }

  public isLoginErrorShown$(): Observable<boolean> {
    return this._isLoginErrorShown$$.asObservable();
  }
  public isSingInErrorShown$(): Observable<boolean> {
    return this._isSignInErrorShown$$.asObservable();
  }
}
