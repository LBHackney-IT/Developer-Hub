import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CognitoUser, AuthenticationDetails, CognitoUserPool, CognitoUserAttribute, ICognitoUserAttributeData} from 'amazon-cognito-identity-js';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  registerForm = new FormGroup({
    emailAddress: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    organisation: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  ngOnInit() {
  }

  createCognitoUserAttributeData = (name: string, value: string) : CognitoUserAttribute => {
    const data =  {
      Name: name,
      Value: value
    };
    return new CognitoUserAttribute(data);
  }

  register = () => {
    this.authService.register(this.registerForm);
  }

}
