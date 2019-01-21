import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { HttpService } from '../../../services/http.service';
import { NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-token-manager',
  templateUrl: './token-manager.component.html',
  styleUrls: ['./token-manager.component.scss']
})
export class TokenManagerComponent implements OnInit {
  private apiKeys;
  constructor(
    private httpService: HttpService
  ) { 
    this.requestApiKeys();
  }

  ngOnInit() {
  }

  requestApiKeys = () => {
    this.httpService.readUserApiKeys()
    .subscribe(
      (response) => {
        this.apiKeys = response
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
