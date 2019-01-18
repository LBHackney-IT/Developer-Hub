import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {CognitoUser, AuthenticationDetails, CognitoUserPool, CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from './alert.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private alertService: AlertService) {}

  private generatePoolData = () => {
    return {
      UserPoolId : environment.cognito.userPoolId, // Your user pool id here
      ClientId : environment.cognito.clientId, // Your client id here
    };
  }

  private createCognitoUserAttributeData = (name: string, value: string) : CognitoUserAttribute => {
    const data =  {
      Name: name,
      Value: value
    };
    return new CognitoUserAttribute(data);
  }

  logIn = async (loginForm) => {
    let accessToken;
    let router = this.router;
    let alertService = this.alertService;

    const poolData = this.generatePoolData();

    const userPool = new CognitoUserPool(poolData);
      
    const authenticationData = {
      Username : loginForm.value.emailAddress,
      Password : loginForm.value.password,
    };

    const authenticationDetails: AuthenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = {
        Username : authenticationData.Username,
        Pool : userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          router.navigateByUrl("api-list");
          alertService.success("Successful Login")
        },
        onFailure: function(err: Error) {
          alertService.error(err.message);
          
        }
    });


}


  register = async (registerForm) => {
    let username, password, firstname, lastname, organisation;

    firstname =  registerForm.value.firstName;
    lastname =  registerForm.value.lastName;
    organisation =  registerForm.value.organisation;
    username = registerForm.value.emailAddress;

  if (registerForm.value.password != registerForm.value.confirmPassword) {
    throw new Error("Passwords Do Not Match");
  } else {
    password =  registerForm.value.password;
  }
  const poolData = this.generatePoolData();
  const userPool = new CognitoUserPool(poolData);

  let attributeList = [];
  const attributeEmail = this.createCognitoUserAttributeData('email', username);
  const attributeName = this.createCognitoUserAttributeData('name', firstname);
  const attributeSurname = this.createCognitoUserAttributeData('custom:surname', lastname);
  const attributeOrganisation = this.createCognitoUserAttributeData('custom:organisation', organisation);

  attributeList.push(attributeEmail);
  attributeList.push(attributeName);
  attributeList.push(attributeSurname);
  attributeList.push(attributeOrganisation);

  userPool.signUp(username, password, attributeList, null, function(err, result){
    if (err) {
      alert(err.message || JSON.stringify(err));
      return;
    }
    const cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
  });
}

  forgotPassword = async (forgotPasswordForm) => {
      
  const poolData = this.generatePoolData();
  const userPool = new CognitoUserPool(poolData);
  const userData = {
    Username : forgotPasswordForm.value.emailAddress,    
    Pool : userPool,    
  };
  const cognitoUser = new CognitoUser(userData);

  cognitoUser.forgotPassword({
      onSuccess: function(result) {
        this.router.navigate(["/confirmation/forgot-password"]);
      },
      onFailure: function(err) {
        // Show error
        console.log(err);
      },
    });
} 

getCurrentUser = () => {
  const poolData = this.generatePoolData();
  const userPool = new CognitoUserPool(poolData);
  return userPool.getCurrentUser();
}

changePassword = async (changePasswordForm) => {
  let password;

  if (changePasswordForm.value.password != changePasswordForm.value.confirmPassword) {
    throw new Error("Passwords Do Not Match");
  } else {
    password =  changePasswordForm.value.password;
  }
  
  const poolData = this.generatePoolData();
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

confirmRegistration = async () => {
  const poolData = this.generatePoolData();
  const userPool = new CognitoUserPool(poolData);
  
  const email = this.route.snapshot.paramMap.get("email");        
  const code = this.route.snapshot.paramMap.get("code");
  const userData = {
      Username : email,    
      Pool : userPool,    
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.confirmRegistration(code, true, function(err, result) {
      if (err) {
        this.router.navigateByUrl("/");
      }
        this.router.navigateByUrl("/login");
  });
}

getCognitoUsername = (): string => {
  const cognitoUser = this.getCurrentUser();
  return cognitoUser.getUsername();
}



}
