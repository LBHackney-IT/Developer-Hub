import { Component, OnInit, Input } from '@angular/core';
import { IApi } from '../../../interfaces/IApi';

/**
 *
 *
 * @export
 * @class ApiItemComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.scss']
})
export class ApiItemComponent implements OnInit {
  /**
   *
   *
   * @type {IApi}
   * @memberof ApiItemComponent
   */
  @Input() api: IApi;
  /**
   *Creates an instance of ApiItemComponent.
   * @memberof ApiItemComponent
   */
  constructor() { }

  /**
   *
   *
   * @memberof ApiItemComponent
   */
  ngOnInit() {
  }

  /**
   *
   *
   * @memberof ApiItemComponent
   */
  isApiCompliant = (api: IApi) => {
    const values: boolean[] = Object.values(api.compliant);
    return values.includes(false);
  }

  /**
   *
   *
   * @memberof ApiItemComponent
   */
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
