import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService

  ) { }

  changePasswordForm = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  })

  ngOnInit() {
  }

  changePassword = () => {
    this.authService.changePassword(this.changePasswordForm);
  }

}
