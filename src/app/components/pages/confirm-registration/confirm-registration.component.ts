import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

/**
 *
 *
 * @export
 * @class ConfirmRegistrationComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.scss']
})
export class ConfirmRegistrationComponent implements OnInit {

  /**
   *Creates an instance of ConfirmRegistrationComponent.
   * @param {AuthService} authService
   * @memberof ConfirmRegistrationComponent
   */
  constructor(
    private authService: AuthService
  ) { }

  /**
   *
   *
   * @memberof ConfirmRegistrationComponent
   */
  ngOnInit() {
    this.confirmRegistration();
  }

  /**
   *
   *
   * @memberof ConfirmRegistrationComponent
   */
  confirmRegistration = () => {
    this.authService.confirmRegistration();
  }

}
