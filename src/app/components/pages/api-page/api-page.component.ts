import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IApi } from '../../../interfaces/IApi';
import { HttpService } from '../../../services/http.service';

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

  checkIfApiIsCompliant = () => {
    const values: boolean[] = Object.values(this.api.compliant);
    return values.includes(false);
  }

  requestAPIKey = () => {
    this.http.createApiKey(this.api.id)
    .subscribe(
      (response: Response) => {
        // show in UI
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
        if(response) {
          console.log("response", response);
          this.apiKey = response['apiKey'];
          this.verified = response['verified'];
        }
    },
     (error) => {
      console.log(error);
     });
  }

  printApiKey = () => {
    if(this.apiKey){
      return this.apiKey + " <h1 class='govuk-tag govuk-tag--{{verified ? 'positive' : 'negative' }}'> {{verified ? 'Verified' : 'Not Verified' }} </h1>";
    }
    else {
      return "Request Below";
    }
  }
}
