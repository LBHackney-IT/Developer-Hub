import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IApi } from '../../../interfaces/IApi';
import { ApiKeyService } from '../../../services/apiKey.service';
import { compliancyConfigMap } from '../../../shared/config';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { IApiState } from '../../../store/state/api.state';
import { selectApiList } from '../../../store/selectors/api.selectors';
import { GetApiList } from '../../../store/actions/api.actions';
import { retry } from 'rxjs/operators';

/**
 * @export
 * @class ApiPageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class ApiPageComponent implements OnInit {
  /**
   * @type {IApi}
   * @memberof ApiPageComponent
   */
  api: IApi;

  /**
   * @type {string}
   * @memberof ApiPageComponent
   */
  apiKey: string;

  /**
   * @type {boolean}
   * @memberof ApiPageComponent
   */
  verified: boolean;

  /**
   * @summary Creates an instance of ApiPageComponent.
   * @param {ApiService} apiService
   * @param {ActivatedRoute} route
   * @param {ApiKeyService} apiKeyService
   * @memberof ApiPageComponent
   */
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private apiKeyService: ApiKeyService,
    private store: Store<IAppState>
  ) { }

  /**
   * @summary Retrieves apiId from route params.
   * Subsequently, retrieves the API info from database
   * @memberof ApiPageComponent
   */
  ngOnInit() {
    const apiId: string = this.route.snapshot.paramMap.get('id');
    this.getApi(apiId);
  }

  /**
   * @summary To be migrated to the {ApiService}
   * @returns {boolean}
   * @memberof ApiPageComponent
   */
  isStagingAvailiable = (): boolean => {
    return this.api.hasOwnProperty('staging');
  }

  /**
   * @summary To be migrated to the {ApiService}
   * @returns {boolean}
   * @memberof ApiPageComponent
   */
  isProductionAvailiable = (): boolean => {
    return this.api.hasOwnProperty('production');
  }

  /**
   * @summary To be migrated to the {ApiService}
   * @returns {boolean}
   * @memberof ApiPageComponent
   */
  isCompliant = (): boolean => {
    const values: boolean[] = Object.values(this.api.compliant);
    return values.includes(false);
  }

  /**
   * @summary To be migrated to the {ApiService}
   * @returns {boolean}
   * @param {string} environment
   * @memberof ApiPageComponent
   */
  isHealthy = (environment: string): boolean => {
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

  /**
   * @summary To be migrated to the {ApiService}
   * @returns {boolean}
   * @param {string} environment
   * @memberof ApiPageComponent
   */
  isDeployed = (environment: string): boolean => {
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

  /**
   * @summary Subscribes to the createApiKey method in the {ApiKeyService}
   * @returns {void}
   * @memberof ApiPageComponent
   */
  requestAPIKey = (): void => {
    this.apiKeyService.createApiKey(this.api.id)
      .subscribe(
        (response) => {
          this.getAPIKey();
        },
        (error) => {
          console.log(error);
        });
  }

  /**
   * @summary Subscribes to the getAPIKey method in the {ApiKeyService}
   * @returns {void}
   * @memberof ApiPageComponent
   */
  getAPIKey = (): void => {
    this.apiKeyService.readApiKey(this.api.id)
      .subscribe(
        (response: Response) => {
          this.apiKey = response['apiKey'];
          this.verified = response['verified'];
        },
        (error) => {
          console.log(error);
        });
  }

  /**
   * @summary Maps the Compliancy Id to the text using the {compliancyConfigMap}
   * @returns {object}
   * @memberof ApiPageComponent
   */
  generateCompliancyText = () => {
    const keys = Object.keys(this.api.compliant);
    return keys.map((id) => {
      return {
        id: id,
        text: compliancyConfigMap[id],
        compliant: this.api.compliant[id]
      };
    });
  }

  /**
   * @param {string} id
   * @summary Subscribes to the getApi method in the {ApiService}
   * @memberof ApiPageComponent
   */
  getApi = (id: string): void => {
    this.store.pipe(select(selectApiList)).pipe(retry(2)).subscribe(
      (response: IApi[]) => {
        const apis: IApi[] = response;
        const api = apis.find(item => item.id === id);
        this.api = api;
      },
      (error) => {
        this.store.dispatch(new GetApiList());
      });
  }
}
