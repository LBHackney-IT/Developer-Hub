import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
    ) {  }

  loginForm = new FormGroup({
    emailAddress : new FormControl(''),
    password : new FormControl('')
  });

  ngOnInit() {
  }

  logIn = () => {
    this.authService.logIn(this.loginForm);  
  }

}
