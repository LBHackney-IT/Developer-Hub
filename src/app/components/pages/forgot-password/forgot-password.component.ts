import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CognitoUser, AuthenticationDetails, CognitoUserPool, CognitoUserAttribute, ICognitoUserAttributeData} from 'amazon-cognito-identity-js';
import { environment } from '../../../../environments/environment';
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
    emailAddress: new FormControl('')
  });

  ngOnInit() {
  }

  forgotPassword = () => {
    this.authService.forgotPassword(this.forgotPasswordForm);
  }

}
