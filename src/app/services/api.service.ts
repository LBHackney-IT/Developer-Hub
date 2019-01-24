import { Injectable } from '@angular/core';
import { IApi } from '../interfaces/IApi';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apis: IApi[];
  constructor(
    private httpClient: HttpClient
  ) { }

  getListOfApis = () => {
    return this.httpClient.get(environment.apiURL.apiService + 'api');
  }

  setListOfApis = (apis: IApi[]) => {
    this.apis = apis;
  }

  getApi = (id: string) => {
    return this.httpClient.get(environment.apiURL.apiService + 'api/' + id);
  }

  transformApiIntoDictionary = (apis: IApi[]) => {
    const transformedApis = apis.map((api) => {
      return {
        [api.id]: api
      };
    });

    return transformedApis;
  }

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

  isApiCompliant = (api: IApi): boolean => {
    const values: boolean[] = Object.values(api.compliant);
    return values.includes(false);
  }
}
