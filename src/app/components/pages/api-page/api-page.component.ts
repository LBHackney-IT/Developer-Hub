import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IApi } from '../../../interfaces/IApi';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class ApiPageComponent implements OnInit {
  api: IApi;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const apiId: string = this.route.snapshot.paramMap.get("id");
    this.api = this.apiService.getApi(apiId);
    console.log(this.api);
  }

  isStagingAvailiable = () => {
    return this.api.hasOwnProperty('staging');
  }

  isProductionAvailiable = () => {
    return this.api.hasOwnProperty('production');
  }

  checkIfApiIsCompliant = () => {
    const values: boolean[] = Object.values(this.api.compliant);
    return values.includes(false);
  }

}
