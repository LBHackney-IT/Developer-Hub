import { Component, OnInit, Input } from '@angular/core';
import { IApi } from '../../../interfaces/IApi';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-api-item-edit',
  templateUrl: './api-item-edit.component.html',
  styleUrls: ['./api-item-edit.component.scss']
})
export class ApiItemEditComponent implements OnInit {
@Input() api: IApi;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
