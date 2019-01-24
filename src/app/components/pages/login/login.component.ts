import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    emailAddress : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  ngOnInit() {
  }

  logIn = () => {
    this.authService.logIn(this.loginForm);
  }

}
