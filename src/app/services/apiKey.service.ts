import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectUser } from '../store/selectors/user.selectors';
import { IUser } from '../interfaces/IUser';

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
    private httpClient: HttpClient,
    private store: Store<IAppState>
  ) { }

  /**
   * @memberof ApiKeyService
   */
  createApiKey =  (apiId: string, stage: string) => {
    let user: IUser;
    this.store.pipe(select(selectUser)).subscribe((response) => {
      user = response;
    });

    const payload = {
      cognito_username: user.cognitoUsername,
      api_id: apiId,
      email: user.email,
      stage: stage
    };
    return this.httpClient.post(environment.apiURL.tokenService + 'api-key', payload);
  }

   /**
    *
    *
    * @memberof ApiKeyService
    */
   readApiKey = (apiId, stageId) => {
    const cognitoUsername: string = this.authService.getCognitoUsername();
    const params = new HttpParams()
      .set('cognito_username', cognitoUsername)
      .append('api_id', apiId)
      .append('stage', stageId);

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
    return this.httpClient.get(environment.apiURL.tokenService + 'api-key/' + cognitoUsername)
    .pipe(map((response) => response['body']));
  }

  /**
   *
   *
   * @memberof ApiKeyService
   */
  readAllUnverifiedApiKeys = () => {
    return this.httpClient.get(environment.apiURL.tokenService + 'api-key/unverified')
    .pipe(map((response) => response['body']));
  }


  /**
   *
   *
   * @memberof ApiKeyService
   */
  verifyApiKey = (apiId: string, stageId: string, cognitoUsername: string) => {
    const payload = {
      cognito_username: cognitoUsername,
      api_id: apiId,
      stage: stageId
    };
    return this.httpClient.post(environment.apiURL.tokenService + 'api-key/verify', payload);
  }
}
