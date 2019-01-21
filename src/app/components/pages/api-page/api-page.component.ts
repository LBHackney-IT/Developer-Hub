import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IApi } from '../../../interfaces/IApi';
import { HttpService } from '../../../services/http.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class ApiPageComponent implements OnInit {
  api: IApi;
  apiKey: string;
  verified: boolean;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private http: HttpService
  ) { }

  ngOnInit() {
    const apiId: string = this.route.snapshot.paramMap.get("id");
    this.api = this.apiService.getApi(apiId);
    this.getAPIKey();
  }

  isStagingAvailiable = () => {
    return this.api.hasOwnProperty('staging');
  }

  isProductionAvailiable = () => {
    return this.api.hasOwnProperty('production');
  }

  isCompliant = () => {
    const values: boolean[] = Object.values(this.api.compliant);
    return values.includes(false);
  }

  isHealthy = (environment: string) => {
    let response: boolean;
    switch (environment) {
      case 'staging': {
        response = this.api.staging.healthStatus;
        break;
      }
      case 'production': {
        response = this.api.production.healthStatus;
        break;
      }
    }

    return response;
  }
 
  isDeployed = (environment: string) => {
    let response: boolean;
    switch (environment) {
      case 'staging': {
        response = this.api.staging.deployed;
        break;
      }
      case 'production': {
        response = this.api.production.deployed;
        break;
      }
    }

    return response;
  }



  requestAPIKey = () => {
    this.http.createApiKey(this.api.id)
    .subscribe(
      (response: Response) => {
          this.getAPIKey();
      },
      (error) => {
        console.log(error);
      });
  }

  getAPIKey = () => {
    this.http.readApiKey(this.api.id)
    .subscribe(
      (response: Response) => {
        if(response.body) {
          this.apiKey = response.body['apiKey'];
          this.verified = response.body['verified'];
        }
    },
     (error) => {
      console.log(error);
     });
  }
}
