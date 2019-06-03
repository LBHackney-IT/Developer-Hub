import { Component, OnInit, Input } from '@angular/core';
import { IApi } from 'src/app/interfaces/IApi';
import { AuthService } from '../../../services/auth.service';
import { IStage } from '../../../interfaces/IStage';
import { ApiKeyService } from '../../../services/apiKey.service';
import { IApikey } from '../../../interfaces/IApikey';

@Component({
  selector: 'app-api-page-section',
  templateUrl: './api-page-section.component.html',
  styleUrls: ['./api-page-section.component.scss']
})
export class ApiPageSectionComponent implements OnInit {
  private apiKey: IApikey;
  private apiKeyCallMade = false;
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
  }

  isLoggedIn = (): boolean => {
    let isUserLoggedIn;
    this.authService.isUserLoggedIn().subscribe((response) => {
      isUserLoggedIn = response;
    });
    return isUserLoggedIn;
  }

  hasApiKey = (): boolean => {
    const response = this.apiKey.value.length > 0;
    return response;
  }

  requestAPIKey = (): void => {
    this.apikeyService.createApiKey(this.api.id, this.stage.id)
      .subscribe(
        (response) => {
          this.getAPIKey();
        },
        (error) => {
        });
  }

  getAPIKey = (): void => {
    this.apikeyService.readApiKey(this.api.id, this.stage.id)
      .subscribe(
        (response: Response) => {
          this.apiKey = {
            value: response ? response['apiKey'] : '',
            verified: response ? response['verified'] : undefined
          };
          this.apiKeyCallMade = true;
          // }
        },
        (error) => {
          // console.log(error);
        });
  }

}


@Component({
  selector: 'app-api-page-section',
  template: ''
})
export class MockApiPageSectionComponent {
  private apiKey: IApikey;
  private apiKeyCallMade = false;
  @Input() title: string;
  @Input() display: boolean;
  @Input() stage: IStage;
  @Input() api: IApi;
}
