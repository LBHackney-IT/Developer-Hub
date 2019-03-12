import { Component, OnInit, Input } from '@angular/core';
import { IApi } from '../../../interfaces/IApi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-item-crud',
  templateUrl: './api-item-crud.component.html',
  styleUrls: ['./api-item-crud.component.scss']
})
export class ApiItemCrudComponent implements OnInit {
@Input() api: IApi;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // redirect to the API form page using the API's id
  onEditApi(id: string) {
    const idUrl = this.api.id;
    this.router.navigate([`/api-form/${idUrl}`]);
  }

}
