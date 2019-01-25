import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  forgotPasswordForm = new FormGroup({
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  ngOnInit() {
  }

  get f() { return this.forgotPasswordForm.controls; }

  forgotPassword = () => {
    this.authService.forgotPassword(this.forgotPasswordForm);
  }

}
