import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Developer-Hub-Frontend';
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    const user = this.authService.getCurrentUser();
    if (user !== null) {
       this.authService.refreshSession(user);
    }
  }
}
