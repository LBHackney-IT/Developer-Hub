import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  createApiKey =  (apiId: string) => {
    const cognitoUsername: string = this.authService.getCognitoUsername();
    this.authService.getUserEmail();
    const email = localStorage.getItem('email');
    localStorage.removeItem('email');

    const payload = {
      cognito_username: cognitoUsername,
      api_id: apiId,
      email: email
    };
    return this.httpClient.post(environment.apiURL.tokenService + 'api-key', payload);
  }

   readApiKey = (apiId) => {
    const cognitoUsername: string = this.authService.getCognitoUsername();
    const params = new HttpParams().set('cognito_username', cognitoUsername).append('api_id', apiId);
    return this.httpClient.get(environment.apiURL.tokenService + 'api-key', {params: params});
  }

  readUserApiKeys = () => {
    const cognitoUsername: string = this.authService.getCognitoUsername();
    return this.httpClient.get(environment.apiURL.tokenService + 'api-key/' + cognitoUsername);
  }

  readAllUnverifiedApiKeys = () => {
    return this.httpClient.get(environment.apiURL.tokenService + 'api-key/unverified');
  }

  verifyApiKey = (apiId: string, cognitoUsername: string) => {
    const payload = {
      cognito_username: cognitoUsername,
      api_id: apiId,
    };
    return this.httpClient.post(environment.apiURL.tokenService + 'api-key/verify', payload);
  }
}
