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
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.getUnverifiedKeys();
  }

  private verifyUser = (tokenObject): void => {
    const apiID: string = tokenObject.apiID;
    const cognitoUsername: string = tokenObject.cognitoUsername;
    const stageId: string = tokenObject.stage;

    this.apiKeyService.verifyApiKey(apiID, stageId, cognitoUsername)
      .subscribe(
        (response) => {
          this.tokenObjects = this.tokenObjects.filter((item) => {
            return item !== tokenObject;
          });
        },
        (error) => {
        });
  }

  getUnverifiedKeys = async (): Promise<void> => {
    this.spinnerService.displaySpinner();
    await this.apiKeyService.readAllUnverifiedApiKeys()
      .subscribe(
        (response) => {
          this.tokenObjects = response;
          this.spinnerService.hideSpinner();

        },
        (error) => {
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
