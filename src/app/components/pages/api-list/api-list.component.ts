import { Component, OnInit } from '@angular/core';
import { IApi } from 'src/app/interfaces/IApi';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {
  apis: IApi[];

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit() {
    this.getListOfApis();
  }

  getListOfApis = () => {
    this.apiService.getListOfApis()
    .subscribe(
      (response) => {
        this.apis = response['body'];
      },
      (error) => {
        console.log(error);
      });
  }

}
