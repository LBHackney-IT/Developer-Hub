import { Component, OnInit, Input } from '@angular/core';
import { IApi } from 'src/app/interfaces/IApi';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';
import { IStage } from '../../../interfaces/IStage';
import { apiKeyService } from '../../../../../../token-generator/services/apiKeyService';
import { ApiKeyService } from '../../../services/apiKey.service';
import { IApikey } from '../../../interfaces/IApikey';

@Component({
  selector: 'app-api-page-section',
  templateUrl: './api-page-section.component.html',
  styleUrls: ['./api-page-section.component.scss']
})
export class ApiPageSectionComponent implements OnInit {
  private apiKey: IApikey;
  @Input() title: string;
  @Input() display: boolean;
  @Input() stage: IStage;
  @Input() api: IApi;
  constructor(
    private authService: AuthService,
    private apikeyService: ApiKeyService) { }

  ngOnInit() {
    if (this.isLoggedIn()) {
      this.getAPIKey();
    }
    console.log(this.title);
  }

  isLoggedIn = (): boolean => {
    let isUserLoggedIn;
    this.authService.isUserLoggedIn().subscribe((response) => {
      isUserLoggedIn = response;
    });
    return isUserLoggedIn;
  }

  requestAPIKey = (): void => {
    this.apikeyService.createApiKey(this.api.id, this.stage.id)
      .subscribe(
        (response) => {
          this.getAPIKey();
        },
        (error) => {
          console.log(error);
        });
  }

  getAPIKey = (): void => {
    this.apikeyService.readApiKey(this.api.id, this.stage.id)
      .subscribe(
        (response: Response) => {
          this.apiKey = {
            value : response ? response['apiKey'] : null,
            verified : response ? response['verified'] : false
          };
        },
        (error) => {
          // console.log(error);
        });
  }

}
