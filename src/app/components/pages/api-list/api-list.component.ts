import { Component, OnInit } from '@angular/core';
import { IApi } from 'src/app/interfaces/IApi';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {
  private apis;
  constructor(
    private apiService: ApiService
  ) { 
      this.apis = apiService.getListOfApis();
  }

  ngOnInit() {
  }

  checkIfApiIsCompliant = (api: IApi) => {
    const values: boolean[] = Object.values(api.compliant);
    return values.includes(false);
  }

}
