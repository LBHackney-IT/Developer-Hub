import { Injectable } from '@angular/core';
import { IApi } from '../interfaces/IApi';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

/**
 *
 *
 * @export
 * @class ApiService
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   *
   *
   * @memberof ApiService
   */
  // Correct URL not used for catching data yet
  url = environment.apiURL.apiService;
  /**
   *
   *
   * @type {IApi[]}
   * @memberof ApiService
   */
  apis: IApi[];
  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   *
   *
   * @memberof ApiService
   */
  getListOfApis = () => {
    return this.httpClient.get(this.url + 'api')
    .pipe(map((response) => response['body']));
  }
  /**
   *
   *
   * @memberof ApiService
   */
  getApi = (id: string) => {
    return this.httpClient.get(this.url + 'api/' + id)
    .pipe(map((response) => response['body']));
  }

  /**
   * Creates and Edits Apis
   *
   * @memberof ApiService
   */
  putApi = (api: IApi) => {
    return this.httpClient.post(this.url + 'api', api);
  }

  /**
   *
   *
   * @memberof ApiService
   */
  getApiEndpoint = (apiID: string, endpointID: string) => {
    const params = new HttpParams().set('pathId', endpointID);
    return this.httpClient.get(this.url + 'swagger-paths/' + apiID, {params: params})
    .pipe(map((response) => response['body']));
  }

  /**
   *
   *
   * @memberof ApiService
   */
  transformApiIntoDictionary = (apis: IApi[]) => {
    const transformedApis = apis.map((api) => {
      return {
        [api.id]: api
      };
    });
    return transformedApis;
  }

  /**
   *
   *
   * @memberof ApiService
   */
  isHealthy = (api: IApi, environmentParam: string): boolean => {
    let response: boolean;
    switch (environmentParam) {
      case 'staging': {
        response = api.staging.healthStatus;
        break;
      }
      case 'production': {
        response = api.production.healthStatus;
        break;
      }
    }

    return response;
  }

  /**
   *
   *
   * @memberof ApiService
   */
  isApiCompliant = (api: IApi): boolean => {
    const values: boolean[] = Object.values(api.compliant);
    return values.includes(false);
  }
}
