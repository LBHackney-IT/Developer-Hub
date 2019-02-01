import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

/**
 * @export
 * @class ApiKeyService
 */
@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {
  /**
   *Creates an instance of ApiKeyService.
   * @param {AuthService} authService
   * @param {HttpClient} httpClient
   * @memberof ApiKeyService
   */
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  /**
   * @memberof ApiKeyService
   */
  createApiKey =  (apiId: string) => {
    const cognitoUsername: string = this.authService.getCognitoUsername();

    const email = this.authService.getUserAttribute('email');
    localStorage.removeItem('email');

    const payload = {
      cognito_username: cognitoUsername,
      api_id: apiId,
      email: email
    };
    return this.httpClient.post(environment.apiURL.tokenService + 'api-key', payload);
  }

   /**
    *
    *
    * @memberof ApiKeyService
    */
   readApiKey = (apiId) => {
    const cognitoUsername: string = this.authService.getCognitoUsername();
    const params = new HttpParams().set('cognito_username', cognitoUsername).append('api_id', apiId);
    return this.httpClient.get(environment.apiURL.tokenService + 'api-key', {params: params})
    .pipe(map((response) => response['body']));
  }

  /**
   *
   *
   * @memberof ApiKeyService
   */
  readUserApiKeys = () => {
    const cognitoUsername: string = this.authService.getCognitoUsername();
    return this.httpClient.get(environment.apiURL.tokenService + 'api-key/' + cognitoUsername);
  }

  /**
   *
   *
   * @memberof ApiKeyService
   */
  readAllUnverifiedApiKeys = () => {
    return this.httpClient.get(environment.apiURL.tokenService + 'api-key/unverified');
  }

  /**
   *
   *
   * @memberof ApiKeyService
   */
  verifyApiKey = (apiId: string, cognitoUsername: string) => {
    const payload = {
      cognito_username: cognitoUsername,
      api_id: apiId,
    };
    return this.httpClient.post(environment.apiURL.tokenService + 'api-key/verify', payload);
  }
}
