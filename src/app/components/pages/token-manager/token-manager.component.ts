import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from '../../../services/apiKey.service';

@Component({
  selector: 'app-token-manager',
  templateUrl: './token-manager.component.html',
  styleUrls: ['./token-manager.component.scss']
})
export class TokenManagerComponent implements OnInit {
  private apiKeys;
  constructor(
    private apiKeyService: ApiKeyService
  ) { 
    this.requestApiKeys();
  }

  ngOnInit() {
  }

  requestApiKeys = () => {
    this.apiKeyService.readUserApiKeys()
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
