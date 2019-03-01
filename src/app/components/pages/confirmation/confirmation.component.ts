import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IConfirmationPageText } from '../../../interfaces/IConfirmationPageText';

/**
 *
 *
 * @export
 * @class ConfirmationComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  title: string;
  message: string;
  type: string;

  confirmationTextMap = {
    forgotPassword: {
      title: 'Email Sent',
      message: 'Please check your email'
    },
    changePassword: {
      title: 'Password Changed',
      message: 'Please login with your new credentials'
    },
    registration: {
      title: 'Registration',
      message: 'Please verify your email address',
    },
    default: {
      title: 'Confirmation',
      message: 'Thank you for confirming'
    }
  };



  private assignMessage = (confirmationText: IConfirmationPageText) => {
    this.title = confirmationText.title;
    this.message = confirmationText.message;
  }

  /**
   *Creates an instance of ConfirmationComponent.
   * @param {ActivatedRoute} route
   * @memberof ConfirmationComponent
   */
  constructor(
    private route: ActivatedRoute,
  ) { }

  /**
   *
   *
   * @memberof ConfirmationComponent
   */
  ngOnInit() {
    this.type = this.getTypeFromUri();
    switch (this.type) {
      case 'forgot-password': {
        this.assignMessage(this.confirmationTextMap.forgotPassword);
        break;
      }
      case 'change-password': {
        this.assignMessage(this.confirmationTextMap.changePassword);
        break;
      }
      case 'registration': {
        this.assignMessage(this.confirmationTextMap.registration);
        break;
      }
      default: {
        this.assignMessage(this.confirmationTextMap.default);
      }
    }
  }

  getTypeFromUri = () => {
    return this.route.snapshot.paramMap.get('type');
  }

}
