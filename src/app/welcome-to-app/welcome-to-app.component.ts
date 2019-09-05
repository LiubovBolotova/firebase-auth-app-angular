import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-welcome-to-app',
  templateUrl: './welcome-to-app.component.html',
  styleUrls: ['./welcome-to-app.component.css'],
})
export class WelcomeToAppComponent implements OnInit {
  constructor(private _athService: AuthService) {}

  ngOnInit() {
    debugger;
  }

  public logout() {
    this._athService.logout();
  }
}
