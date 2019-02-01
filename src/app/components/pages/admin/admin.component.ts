import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from '../../../services/apiKey.service';
import { AuthService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';

/**
 *
 * @export
 * @class AdminComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  /**
   * @summary
   * @type {object[]}
   * @memberof AdminComponent
   */
  tokenObjects: object[];

  /**
   * @summary Creates an instance of AdminComponent.
   * @param {ApiKeyService} apiKeyService
   * @param {AuthService} authService
   * @param {AlertService} alertService
   * @memberof AdminComponent
   */
  constructor(
    private apiKeyService: ApiKeyService,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  /**
   *
   *
   * @memberof AdminComponent
   */
  ngOnInit() {
    this.getUnverifiedKeys();
  }

  /**
   * @returns void
   * @public
   * @memberof AdminComponent
   */
  verifyUser = (tokenObject): void => {
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

  /**
   * @async
   * @returns Promise<void>
   * @memberof AdminComponent
   */
  getUnverifiedKeys = async (): Promise<void> => {
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
