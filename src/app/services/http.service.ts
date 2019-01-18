import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  createApiKey =  (apiId: string) => {
    const cognitoUsername: string = this.authService.getCognitoUsername();
    
    const payload = {
      cognito_username: cognitoUsername,
      api_id: apiId
    };
    return this.httpClient.post(environment.apiURL.tokenService + 'create-api-key', payload);
  }

   readApiKey = (apiId) => {
    const cognitoUsername: string = this.authService.getCognitoUsername();
    let params = new HttpParams().set('cognito_username', cognitoUsername).append("api_id", apiId);
    return this.httpClient.get(environment.apiURL.tokenService + 'read-api-key', {params: params});
  }

  // verifyApiKey = (apiId) => {
  //   return this.httpClient.post
  // }
}
