import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';


/**
 *
 *
 * @export
 * @class ForgotPasswordComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  /**
   *Creates an instance of ForgotPasswordComponent.
   * @param {AuthService} authService
   * @memberof ForgotPasswordComponent
   */
  constructor(
    private authService: AuthService
  ) { }

  /**
   *
   *
   * @memberof ForgotPasswordComponent
   */
  forgotPasswordForm = new FormGroup({
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  /**
   *
   *
   * @memberof ForgotPasswordComponent
   */
  ngOnInit() {
  }

  /**
   *
   *
   * @readonly
   * @memberof ForgotPasswordComponent
   */
  get f() { return this.forgotPasswordForm.controls; }

  /**
   *
   *
   * @memberof ForgotPasswordComponent
   */
  forgotPassword = () => {
    this.authService.forgotPassword(this.forgotPasswordForm);
  }

}
