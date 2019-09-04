import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeToAppComponent } from './welcome-to-app/welcome-to-app.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'welcome', component: WelcomeToAppComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent },
];
