import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeToAppComponent } from './welcome-to-app/welcome-to-app.component';

import { Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  canActivate,
  AngularFireAuthGuard,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'welcome',
    component: WelcomeToAppComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];
