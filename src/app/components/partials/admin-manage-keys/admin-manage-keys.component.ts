import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from '../../../services/apiKey.service';
import { AuthService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-admin-manage-keys',
  templateUrl: './admin-manage-keys.component.html',
  styleUrls: ['./admin-manage-keys.component.scss']
})
export class AdminManageKeysComponent implements OnInit {

  tokenObjects: object[];

  constructor(
    private apiKeyService: ApiKeyService,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getUnverifiedKeys();
  }

  private verifyUser = (tokenObject): void => {
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

  private getUnverifiedKeys = async (): Promise<void> => {
    await this.apiKeyService.readAllUnverifiedApiKeys()
    .subscribe(
      (response) => {
        this.tokenObjects = response;
      },
      (error) => {
        console.log(error);
      });
  }

}
