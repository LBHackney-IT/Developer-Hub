import { Component, OnInit } from '@angular/core';
import { IApi } from 'src/app/interfaces/IApi';
import { ApiService } from '../../../services/api.service';

/**
 *
 *
 * @export
 * @class ApiListComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {
  /**
   * @type {IApi[]}
   * @memberof ApiListComponent
   */
  apis: IApi[];

  /**
   * @summary Creates an instance of ApiListComponent.
   * @param {ApiService} apiService
   * @memberof ApiListComponent
   */
  constructor(
    private apiService: ApiService
  ) { }

  /**
   * @summary Retrieves list of APIs upon initialising
   * @memberof ApiListComponent
   */
  ngOnInit() {
    this.getListOfApis();
  }

  /**
   * @summary Subscribes to getListOfApis method
   * in the {ApiService}
   * @memberof ApiListComponent
   */
  getListOfApis = () => {
    this.apiService.getListOfApis()
    .subscribe(
      (response) => {
        this.apis = response;
      },
      (error) => {
        console.log(error);
      });
  }

}
