import { Component, OnInit } from '@angular/core';
import { IApi } from 'src/app/interfaces/IApi';
import { ApiService } from '../../../services/api.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { selectApiList } from '../../../store/selectors/api.selectors';
import { GetApiList } from 'src/app/store/actions/api.actions';
import { Observable } from 'rxjs';

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
  // apis: Observable<IApi[]>;
  apis: IApi[];

  /**
   * @summary Creates an instance of ApiListComponent.
   * @param {ApiService} apiService
   * @memberof ApiListComponent
   */
  constructor(
    private apiService: ApiService,
    private store: Store<IAppState>
  ) { }

  /**
   * @summary Retrieves list of APIs upon initialising
   * @memberof ApiListComponent
   */
  ngOnInit() {
    this.getListOfApis();
    this.store.pipe(select(selectApiList)).subscribe((response) => {
      this.apis = response;
    });
  }

  /**
   * @summary Subscribes to getListOfApis method
   * in the {ApiService}
   * @memberof ApiListComponent
   */
  getListOfApis = () => {
    this.store.dispatch(new GetApiList());
  }

}
