import { Component, OnInit } from '@angular/core';
import { IApi } from 'src/app/interfaces/IApi';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-api-list',
  templateUrl: './admin-api-list.component.html',
  styleUrls: ['./admin-api-list.component.scss']
})

export class AdminApiListComponent implements OnInit {
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

