import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { checkPassword } from 'src/app/validators/check-password.validator';
import { passwordRegex } from '../../../shared/password-regex.validation';

/**
 * @export
 * @class ChangePasswordComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  /**
   * @summary Creates an instance of ChangePasswordComponent.
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {AuthService} authService
   * @memberof ChangePasswordComponent
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService

  ) { }

  /**
   * @memberof ChangePasswordComponent
   */
  changePasswordForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(passwordRegex)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(passwordRegex)
    ]),
  }, checkPassword);
  /**
   * @memberof ChangePasswordComponent
   */
  ngOnInit() {
  }

  /**
   * @readonly
   * @memberof ChangePasswordComponent
   */
  get f() { return this.changePasswordForm.controls; }

  /**
   * @memberof ChangePasswordComponent
   */
  changePassword = (): void => {
    this.authService.changePassword(this.changePasswordForm);
  }

}
