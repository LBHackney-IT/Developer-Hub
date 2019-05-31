import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IApi } from '../../../interfaces/IApi';
import { ApiKeyService } from '../../../services/apiKey.service';
import { compliancyConfigMap} from '../../../shared/config';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { IApiState } from '../../../store/state/api.state';
import { selectApiList, selectApi } from '../../../store/selectors/api.selectors';
import { GetApiList } from '../../../store/actions/api.actions';
import { retry } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';
import { IApikey } from '../../../interfaces/IApikey';

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
  apiKey: IApikey;

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
    private authService: AuthService,
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
    const id: string = this.route.snapshot.paramMap.get('id');
    this.getApi(id);
  }

  isLoggedIn = (): boolean => {
    let isUserLoggedIn;
    this.authService.isUserLoggedIn().subscribe((response) => {
      isUserLoggedIn = response;
    });

    return isUserLoggedIn;
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
      case 'development': {
        response = this.api.development.deployed;
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
    this.store.pipe(select(selectApi(id))).pipe(retry(2)).subscribe(
      (response: IApi) => {
        this.api = response;
      },
      (error) => {
        this.store.dispatch(new GetApiList());
      });
  }
}
