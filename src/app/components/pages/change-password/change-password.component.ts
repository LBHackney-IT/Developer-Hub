import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import {CognitoUser, AuthenticationDetails, CognitoUserPool, CognitoUserAttribute, ICognitoUserAttributeData} from 'amazon-cognito-identity-js';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router

  ) { }

  changePasswordForm = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  })

  ngOnInit() {
  }

  changePassword = () => {
    let password;

    if (this.changePasswordForm.value.password != this.changePasswordForm.value.confirmPassword) {
      throw new Error("Passwords Do Not Match");
    } else {
      password =  this.changePasswordForm.value.password;
    }
    
    const poolData = {
      UserPoolId : environment.cognito.userPoolId, // Your user pool id here
      ClientId : environment.cognito.clientId, // Your client id here
    };
    const userPool = new CognitoUserPool(poolData);
    
    const email = this.route.snapshot.paramMap.get("email");        
    const code = this.route.snapshot.paramMap.get("code");
    
    const userData = {          
      Username : email,    
      Pool : userPool,        
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmPassword(code, password, {
      onSuccess: function () {
        this.router.navigateByUrl("/confirmation/change-password");
        },
        onFailure: function(err) {
          console.log(err);
        this.router.navigateByUrl("/");
        }
    });
  }

}
