import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { passwordRegex } from '../../../shared/password-regex.validation';

/**
 *
 *
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   *Creates an instance of LoginComponent.
   * @param {AuthService} authService
   * @memberof LoginComponent
   */
  constructor(
    private authService: AuthService
    ) {  }

  /**
   *
   *
   * @memberof LoginComponent
   */
  loginForm = new FormGroup({
    emailAddress : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(passwordRegex)
    ])
  });

  /**
   *
   *
   * @memberof LoginComponent
   */
  ngOnInit() {
  }

  /**
   *
   *
   * @readonly
   * @memberof LoginComponent
   */
  get f() { return this.loginForm.controls; }


  /**
   *
   *
   * @memberof LoginComponent
   */
  logIn = () => {
    this.authService.logIn(this.loginForm);
  }

}
