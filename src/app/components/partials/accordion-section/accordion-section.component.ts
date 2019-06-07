import { Component, OnInit, Input, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { IStage } from '../../../interfaces/IStage';
import { IApi } from '../../../interfaces/IApi';
import { IApikey } from '../../../interfaces/IApikey';
import { AuthService } from '../../../services/auth.service';
import { ApiKeyService } from '../../../services/apiKey.service';

@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.scss']
})
export class AccordionSectionComponent implements OnInit, AfterContentChecked {

  private apiKey: IApikey;
  private apiKeyCallMade = false;

  @Input() title: string;
  @Input() display: boolean;
  @Input() stage: IStage;
  @Input() api: IApi;
  constructor(private authService: AuthService,
    private apikeyService: ApiKeyService) { }

  ngOnInit() {

  }

  ngAfterContentChecked() {
    if (this.isLoggedIn() && !this.apiKeyCallMade) {
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
        },
        (error) => {
          // console.log(error);
        });
  }
}
