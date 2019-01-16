import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CognitoUser, AuthenticationDetails, CognitoUserPool, CognitoUserAttribute, ICognitoUserAttributeData} from 'amazon-cognito-identity-js';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  forgotPasswordForm = new FormGroup({
    emailAddress: new FormControl('')
  });

  ngOnInit() {
  }

  forgotPassword = () => {
    
    const poolData = {
      UserPoolId : environment.cognito.userPoolId, // Your user pool id here
      ClientId : environment.cognito.clientId, // Your client id here
    };


  const userPool = new CognitoUserPool(poolData);
    
  const userData = {
    Username : this.forgotPasswordForm.value.emailAddress,    
    Pool : userPool,    
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.forgotPassword({
      onSuccess: function(result) {
        this.router.navigateByUrl("/confirmation/forgot-password");
      },
      onFailure: function(err) {
        // Show error
        console.log(err);
      },
    });
  }

}
