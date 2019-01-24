import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // private isUserLoggedIn: boolean;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.authService.isUserLoggedIn();
    this.isUserLoggedIn();
  }

  isUserLoggedIn = (): boolean => {
    const response = this.authService.isUserLoggedIn();
    console.log(response);
    return response;
  }

}
