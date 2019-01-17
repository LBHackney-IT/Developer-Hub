import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CognitoUser, AuthenticationDetails, CognitoUserPool, CognitoUserAttribute, ICognitoUserAttributeData} from 'amazon-cognito-identity-js';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

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
         
    let username, password, firstname, lastname, organisation;

    firstname =  this.registerForm.value.firstName;
    lastname =  this.registerForm.value.lastName;
    organisation =  this.registerForm.value.organisation;
    username = this.registerForm.value.emailAddress;

  if (this.registerForm.value.password != this.registerForm.value.confirmPassword) {
    throw new Error("Passwords Do Not Match");
  } else {
    password =  this.registerForm.value.password;
  }
  const poolData = {
    UserPoolId : environment.cognito.userPoolId, // Your user pool id here
    ClientId : environment.cognito.clientId, // Your client id here
  };
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

}
