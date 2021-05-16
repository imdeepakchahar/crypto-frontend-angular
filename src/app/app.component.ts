import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crypto-manager';
  isLoggedIn = false;
  constructor(public authService: AuthService) {
    this.isLoggedIn = authService.loggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
