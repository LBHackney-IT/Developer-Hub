import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.scss']
})
export class ConfirmRegistrationComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.confirmRegistration();
  }

  confirmRegistration = () => {
    this.authService.confirmRegistration();
  }

}
