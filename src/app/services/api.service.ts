import { Injectable } from '@angular/core';
import { apis } from '../shared/mock-db';
import { IApi } from '../interfaces/IApi';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  
  getListOfApis = () : IApi[] => {
    return apis;
  }


  getApi = (id: string) : IApi => {
    return apis.find((api) => {
        return api.id == id;
    });
  }

  transformApiIntoDictionary = (apis: IApi[]) => {
    const transformedApis = apis.map((api) => {
      return {
        [api.id]: api 
      }
    });

    return transformedApis;
  }

  isHealthy = (api: IApi, environment: string) : boolean => {
    let response: boolean;
    switch (environment) {
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

  isApiCompliant = (api: IApi) : boolean => {
    const values: boolean[] = Object.values(api.compliant);
    return values.includes(false);
  }
  
}
