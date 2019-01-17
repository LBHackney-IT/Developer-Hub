import { Injectable } from '@angular/core';
import { apis } from '../shared/mock-db';
import { IApi } from '../interfaces/IApi';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  
  getListOfApis = () => {
    return apis;
  }


  getApi = (id: string) => {
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
  
}
