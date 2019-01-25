import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from '../../../services/apiKey.service';
import { AuthService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tokenObjects: object[];

  constructor(
    private apiKeyService: ApiKeyService,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getUnverifiedKeys();
  }

  verifyUser = (tokenObject) => {
    const apiID: string = tokenObject.apiID;
    const cognitoUsername: string = tokenObject.cognitoUsername;
    this.apiKeyService.verifyApiKey(apiID, cognitoUsername)
    .subscribe(
      (response) => {
        this.tokenObjects = this.tokenObjects.filter((item) => {
          return item !== tokenObject;
        });
      },
      (error) => {
        console.log(error);
      });
  }

  getUnverifiedKeys = async () => {
    await this.apiKeyService.readAllUnverifiedApiKeys()
    .subscribe(
      (response) => {
        this.tokenObjects = response['body'];
      },
      (error) => {
        console.log(error);
      });
  }

}
