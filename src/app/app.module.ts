import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material-module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { AuthGuard } from '../app/auth.guard';
import { environment } from '../environments/environment';

import { AuthService } from './auth.service';
import { FormValidationService } from './form-validation.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeToAppComponent } from './welcome-to-app/welcome-to-app.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent, WelcomeToAppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [FormValidationService, AuthGuard, AuthService],
  bootstrap: [AppComponent, LoginComponent, RegistrationComponent, WelcomeToAppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [LoginComponent],
})
export class AppModule {}
