import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../../services/auth.service';


/**
 *
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   *
   *
   * @type {string}
   * @memberof HeaderComponent
   */
  public userName: string = null;
  /**
   *Creates an instance of HeaderComponent.
   * @param {AuthService} authService
   * @memberof HeaderComponent
   */
  constructor(
    private authService: AuthService
  ) { }

  /**
   *
   *
   * @memberof HeaderComponent
   */
  ngOnInit() {
    if (this.isUserLoggedIn()) {
      this.userName = this.authService.getUserAttribute('name');
    }

    console.log(this.userName);
  }

  /**
   *
   *
   * @memberof HeaderComponent
   */
  isUserLoggedIn = (): boolean => {
    const response = this.authService.isUserLoggedIn();
    console.log(response);
    return response;
  }

}
