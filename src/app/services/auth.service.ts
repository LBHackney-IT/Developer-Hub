import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {CognitoUser, AuthenticationDetails, CognitoUserPool, CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from './alert.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

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

  private createCognitoUserAttributeData = (name: string, value: string): CognitoUserAttribute => {
    const data =  {
      Name: name,
      Value: value
    };
    return new CognitoUserAttribute(data);
  }

  logIn = async (loginForm) => {
    try {
      const router = this.router;
      const alertService = this.alertService;

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
            alertService.success('Successful Login');
            router.navigateByUrl('api-list');
          },
          onFailure: function(err: Error) {
            alertService.error(err.message);
            throw new Error(err.message);
          }
      });

    } catch (error) {
      const alertService = this.alertService;
      alertService.error(error.message);
    }
}


  register = async (registerForm) => {

    try {
      let username, password, firstname, lastname, organisation;
      const router = this.router;
      const alertService = this.alertService;
      firstname =  registerForm.value.firstName;
      lastname =  registerForm.value.lastName;
      organisation =  registerForm.value.organisation;
      username = registerForm.value.emailAddress;

      if (registerForm.value.password !== registerForm.value.confirmPassword) {
        throw new Error('Passwords Do Not Match');
      } else {
        password =  registerForm.value.password;
      }

      const poolData = this.generatePoolData();
      const userPool = new CognitoUserPool(poolData);
      const attributeList = [];
      const attributeEmail = this.createCognitoUserAttributeData('email', username);
      const attributeName = this.createCognitoUserAttributeData('name', firstname);
      const attributeSurname = this.createCognitoUserAttributeData('custom:surname', lastname);
      const attributeOrganisation = this.createCognitoUserAttributeData('custom:organisation', organisation);

      attributeList.push(attributeEmail);
      attributeList.push(attributeName);
      attributeList.push(attributeSurname);
      attributeList.push(attributeOrganisation);


      await userPool.signUp(username, password, attributeList, null, function(err, result) {
        if (err) {
          alertService.error(err.message);
          throw new Error(err.message);
        }
        const cognitoUser = result.user;

        console.log('user name is ' + cognitoUser.getUsername());
        alertService.success('Please check your email');
        router.navigateByUrl('/confirmation/registration');
      });

    } catch (error) {
      const alertService = this.alertService;
      console.log(error);
      alertService.error(error.message);
    }
  }

  forgotPassword = async (forgotPasswordForm) => {
    try {
      const router = this.router;
      const alertService = this.alertService;
      const poolData = this.generatePoolData();
      const userPool = new CognitoUserPool(poolData);
      const userData = {
        Username : forgotPasswordForm.value.emailAddress,
        Pool : userPool,
      };
      const cognitoUser = new CognitoUser(userData);

      cognitoUser.forgotPassword({
          onSuccess: function(result) {
            alertService.success('Please check your email');
            router.navigateByUrl('/confirmation/forgot-password');
        },
          onFailure: function(err) {
            alertService.error(err.message);
            console.log(err);
        },
      });

    } catch (error) {
      const alertService = this.alertService;
      alertService.error(error.message);
      console.log(error);
    }
}

getCurrentUser = () => {
  const poolData = this.generatePoolData();
  const userPool = new CognitoUserPool(poolData);
  return userPool.getCurrentUser();
}

isUserLoggedIn = (): boolean  => {
  const cognitoUser = this.getCurrentUser();
  if ( cognitoUser == null) {
    return false;
  }
  return true;
}

changePassword = async (changePasswordForm): Promise<any> => {
  try {
    let password;
    const router = this.router;
    const alertService = this.alertService;
    if (changePasswordForm.value.password !== changePasswordForm.value.confirmPassword) {
      throw new Error('Passwords Do Not Match');
    } else {
      password =  changePasswordForm.value.password;
    }

    const poolData = this.generatePoolData();
    const userPool = new CognitoUserPool(poolData);
    const email = this.route.snapshot.queryParamMap.get('email');
    const code = this.route.snapshot.queryParamMap.get('code');
    const userData = {
      Username : email,
      Pool : userPool
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmPassword(code, password, {
      onSuccess: function () {
        alertService.success('Success message');
        router.navigateByUrl('/confirmation/change-password');
        },
        onFailure: function(err) {
          console.log(err);
        alertService.error(err.message);
        router.navigateByUrl('/');
        }
    });

  } catch (error) {
    const alertService = this.alertService;
    alertService.error(error.message);
  }

}

confirmRegistration = async () => {
  const router = this.router;
  const alertService = this.alertService;

  const poolData = this.generatePoolData();
  const userPool = new CognitoUserPool(poolData);

  const email = this.route.snapshot.queryParamMap.get('email');
  const code = this.route.snapshot.queryParamMap.get('code');
  const userData = {
      Username : email,
      Pool : userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.confirmRegistration(code, true, function(err, result) {
      if (err) {
        alertService.error('Error Message');
        router.navigateByUrl('/');
      }
      alertService.success('Success Message');

      router.navigateByUrl('/login');
  });
}

getCognitoUsername = (): string => {
  const cognitoUser = this.getCurrentUser();
  return cognitoUser.getUsername();
}

getSession = () => {
  const cognitoUser: CognitoUser = this.getCurrentUser();
}


getUserEmail =  () => {

  const cognitoUser: CognitoUser = this.getCurrentUser();

  if (cognitoUser !== null) {
    cognitoUser.getSession((getSessionError, data) => {
      if (getSessionError) {
        console.log('getSessionError', getSessionError.message);
      }

      cognitoUser.getUserAttributes((err, result) => {
        if (err) {
          console.log('err', err.message);
        }
        console.log(result);
        const emailObject = result.find((item) => {
          return item['Name'] === 'email';
        });
        localStorage.setItem('email', emailObject.getValue());
      });
    });
  }











}

}
