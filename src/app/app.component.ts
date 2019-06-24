import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { createUser } from '../testing/mock-db';
import { IUser } from './interfaces/IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Developer-Hub-Frontend';
  user: IUser = null;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser = async () => {
    const cognitoUser = this.authService.getCurrentUser();
    let isAuthenticated: boolean;

    isAuthenticated = cognitoUser !== null ? this.authService.isAuthenticated(cognitoUser) : false;

    if (isAuthenticated) {
      await this.authService.refreshSession(cognitoUser);
    }
    this.authService.getUserObject().subscribe(
      (response) => {
        this.user = response;
      });
  }
}


@Component({
  selector: 'app-root',
  template: ''
})
export class MockAppComponent {
  title = 'Developer-Hub-Frontend';
  getCurrentUser = () => {
    return createUser();
  }
}
