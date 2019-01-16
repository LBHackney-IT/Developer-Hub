import { Component, OnInit } from '@angular/core';
import { apis } from '../../../shared/mock-db';
import { IApi } from 'src/app/interfaces/IApi';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {
  apis: IApi[] = apis;
  constructor() { }

  ngOnInit() {
  }

  checkIfApiIsCompliant = (api: IApi) => {
    const values: boolean[] = Object.values(api.compliant);
    return values.includes(false);
  }

}
