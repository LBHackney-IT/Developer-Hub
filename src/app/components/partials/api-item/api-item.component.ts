import { Component, OnInit, Input } from '@angular/core';
import { IApi } from '../../../interfaces/IApi';

@Component({
  selector: 'app-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.scss']
})
export class ApiItemComponent implements OnInit {
  @Input() api: IApi;
  constructor() { }

  ngOnInit() {
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

}
