import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from '../../../services/apiKey.service';
import { AuthService } from '../../../services/auth.service';
import { SpinnerService } from '../../../services/spinner.service';

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
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.getUnverifiedKeys();
  }

  private verifyUser = (tokenObject): void => {
    const apiID: string = tokenObject.apiID;
    const cognitoUsername: string = tokenObject.cognitoUsername;
    const stageId: string = tokenObject.stageId;
    this.apiKeyService.verifyApiKey(apiID, cognitoUsername, stageId)
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
    this.spinnerService.displaySpinner();
    await this.apiKeyService.readAllUnverifiedApiKeys()
      .subscribe(
        (response) => {
          this.tokenObjects = response;
          this.spinnerService.hideSpinner();

        },
        (error) => {
          console.log(error);
          this.spinnerService.hideSpinner();
        });
  }

}

@Component({
  selector: 'app-admin-manage-keys',
  template: ''
})
export class MockAdminManageKeysComponent {
}
