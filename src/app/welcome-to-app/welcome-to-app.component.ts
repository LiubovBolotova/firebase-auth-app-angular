import { Component } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-welcome-to-app',
  templateUrl: './welcome-to-app.component.html',
  styleUrls: ['./welcome-to-app.component.css'],
})
export class WelcomeToAppComponent {
  constructor(private _athService: AuthService) {}

  public logout() {
    this._athService.logout();
  }
}
