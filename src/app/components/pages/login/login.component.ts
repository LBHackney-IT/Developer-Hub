import { Component, OnInit } from '@angular/core';
import {CognitoUser, AuthenticationDetails, CognitoUserPool} from 'amazon-cognito-identity-js';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  constructor(
    private router: Router
    ) {  }

  loginForm = new FormGroup({
    emailAddress : new FormControl(''),
    password : new FormControl('')
  });

  ngOnInit() {
  }

  logIn = () => {
    console.log(this.loginForm.value)
    let accessToken;

    const poolData = {
      UserPoolId : environment.cognito.userPoolId, // Your user pool id here
      ClientId : environment.cognito.clientId, // Your client id here
    };

    const userPool = new CognitoUserPool(poolData);
      
    const authenticationData = {
      Username : this.loginForm.value.emailAddress,
      Password : this.loginForm.value.password,
    };

    const authenticationDetails: AuthenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
        Username : authenticationData.Username,
        Pool : userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          this.router.navigateByUrl("/api-list");
        },
        onFailure: function(err) {
          console.log(err);
        },
    });
  }

}
