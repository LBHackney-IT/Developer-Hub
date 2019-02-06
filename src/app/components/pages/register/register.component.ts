import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

/**
 *
 *
 * @export
 * @class RegisterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /**
   *Creates an instance of RegisterComponent.
   * @param {AuthService} authService
   * @memberof RegisterComponent
   */
  constructor(
    private authService: AuthService
  ) { }

  /**
   *
   *
   * @memberof RegisterComponent
   */
  registerForm = new FormGroup({
    emailAddress: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    organisation: new FormControl('', [
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    ]),
  });

  /**
   *
   *
   * @memberof RegisterComponent
   */
  ngOnInit() {
  }

  /**
   *
   *
   * @readonly
   * @memberof RegisterComponent
   */
  get f() { return this.registerForm.controls; }

  /**
   *
   *
   * @memberof RegisterComponent
   */
  register = () => {
    this.authService.register(this.registerForm);
  }

}
