import { Component, OnInit, Input } from '@angular/core';
import { IApi } from '../../../interfaces/IApi';
import { Router } from '@angular/router';
import {  Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { DeleteApi, DeleteApiSuccess } from '../../../store/actions/api.actions';

@Component({
  selector: 'app-api-item-crud',
  templateUrl: './api-item-crud.component.html',
  styleUrls: ['./api-item-crud.component.scss']
})
export class ApiItemCrudComponent implements OnInit {
@Input() api: IApi;

  constructor(private router: Router, private store: Store<IAppState>) { }

  ngOnInit() {
  }

  // redirect to the API form page using the API's id
  onEditApi() {
    const idUrl = this.api.id;
    this.router.navigate([`/api-form/${idUrl}`]);
  }

  onDeleteApi(id: string) {
    this.store.dispatch(new DeleteApiSuccess(id));
  }

}
