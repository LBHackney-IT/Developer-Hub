import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from '../../../services/apiKey.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-token-manager',
  templateUrl: './token-manager.component.html',
  styleUrls: ['./token-manager.component.scss']
})
export class TokenManagerComponent implements OnInit {
  private apiKeys;
  constructor(
    private apiKeyService: ApiKeyService,
    private authSerice: AuthService
  ) {

  }

  ngOnInit() {
    this.requestApiKeys();
  }

  requestApiKeys = async () => {
    const cognitoUsername = this.authSerice.getCognitoUsername();
    console.log('cognitoUsername', cognitoUsername);
    await this.apiKeyService.readUserApiKeys()
    .subscribe(
      (response) => {
        this.apiKeys = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
