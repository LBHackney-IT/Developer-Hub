import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IApi } from '../../../interfaces/IApi';
import { ApiKeyService } from '../../../services/apiKey.service';
import { environment } from '../../../../environments/environment';
import { compliancyConfigMap } from '../../../shared/config';

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
    private apiKeyService: ApiKeyService
  ) { }

  ngOnInit() {
    const apiId: string = this.route.snapshot.paramMap.get("id");
    this.api = this.apiService.getApi(apiId);
    console.log(this.api);
    this.generateCompliancyText();
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
    this.apiKeyService.createApiKey(this.api.id)
    .subscribe(
      (response: Response) => {
          this.getAPIKey();
      },
      (error) => {
        console.log(error);
      });
  }

  getAPIKey = () => {
    this.apiKeyService.readApiKey(this.api.id)
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

  generateCompliancyText = () => {
    let keys = Object.keys(this.api.compliant);
    return keys.map((id) => {
      return {
        id: id,
        text: compliancyConfigMap[id],
        compliant: this.api.compliant[id] 
      }
    });
  }
}
