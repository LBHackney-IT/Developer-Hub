import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userName: string = null;
  private dropDown: boolean = false;
  
  constructor(
    private authService: AuthService
  ) { }

  
  ngOnInit() {
    if (this.isUserLoggedIn()) {
      this.userName = this.authService.getUserAttribute('name');
    }

    console.log(this.userName);
  }


  isUserLoggedIn = (): boolean => {
    const response = this.authService.isUserLoggedIn();
    console.log(response);
    return response;
  }

}
