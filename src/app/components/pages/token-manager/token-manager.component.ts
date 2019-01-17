import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-token-manager',
  templateUrl: './token-manager.component.html',
  styleUrls: ['./token-manager.component.scss']
})
export class TokenManagerComponent implements OnInit {
  private apis;
  constructor(
    private apiService: ApiService
  ) { 
    this.apis = this.apiService.getListOfApis();
  }

  ngOnInit() {
  }

}
