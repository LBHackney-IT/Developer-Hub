import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

/**
 *
 *
 * @export
 * @class LogoutComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  /**
   *Creates an instance of LogoutComponent.
   * @param {AuthService} authService
   * @memberof LogoutComponent
   */
  constructor(
    private authService: AuthService
  ) { }

  /**
   *
   *
   * @memberof LogoutComponent
   */
  ngOnInit() {
    this.authService.logout();
  }

}
