import { Component, OnInit } from '@angular/core';
import { IApi } from 'src/app/interfaces/IApi';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {
  private apis;

  constructor(
    public apiService: ApiService
  ) { 
  }

  ngOnInit() {
    this.getListOfApis();
  }

  isApiCompliant = (api: IApi) => {
    const values: boolean[] = Object.values(api.compliant);
    return values.includes(false);
  }

  isHealthy = (api: IApi, environment: string) => {
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

  getListOfApis = () => {
    this.apiService.getListOfApis()
    .subscribe(
      (response: Response) => {
        this.apis = response.body;
      }, 
      (error) => {
        console.log(error);
      });
  }

}
