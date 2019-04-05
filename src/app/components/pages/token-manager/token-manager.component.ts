import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from '../../../services/apiKey.service';
import { AuthService } from '../../../services/auth.service';
import { SpinnerService } from '../../../services/spinner.service';

/**
 *
 *
 * @export
 * @class TokenManagerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-token-manager',
  templateUrl: './token-manager.component.html',
  styleUrls: ['./token-manager.component.scss']
})
export class TokenManagerComponent implements OnInit {
  /**
   *
   *
   * @memberof TokenManagerComponent
   */
  apiKeys: [];
  /**
   *Creates an instance of TokenManagerComponent.
   * @param {ApiKeyService} apiKeyService
   * @param {AuthService} authSerice
   * @memberof TokenManagerComponent
   */
  constructor(
    private apiKeyService: ApiKeyService,
    private spinnerService: SpinnerService
  ) {

  }

  /**
   *
   *
   * @memberof TokenManagerComponent
   */
  ngOnInit() {
    this.requestApiKeys();
  }

  /**
   *
   *
   * @memberof TokenManagerComponent
   */
  requestApiKeys = async () => {
    // const cognitoUsername = this.authSerice.getCognitoUsername();
    this.spinnerService.displaySpinner();
    await this.apiKeyService.readUserApiKeys()
      .subscribe(
        (response) => {
          this.spinnerService.hideSpinner();
          response = JSON.parse(response);
          this.apiKeys = response;
        },
        (error) => {
          console.log(error);
          this.spinnerService.hideSpinner();
        }
      );
  }

}
