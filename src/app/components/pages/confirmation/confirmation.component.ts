import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  title: string;
  message: string;



  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type');
    switch (type) {
      case 'forgot-password': {
        this.title = "Email Sent";
        this.message = "Please check your email";
        break;
      };
      case 'change-password': {
        this.title = "Password Changed";
        this.message = "Please login with your new credentials";
        break;
      }
      default:
      this.title = "Title";
      this.message = "Message";

    }
  }

}
