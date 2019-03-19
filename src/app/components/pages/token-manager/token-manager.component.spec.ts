import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenManagerComponent } from './token-manager.component';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';
import { MockClickRevealComponent } from '../../partials/click-reveal/click-reveal.component';
import { TestingModule } from '../../../../testing/utils';
import { SpinnerService } from '../../../services/spinner.service';
import { ApiKeyService } from '../../../services/apiKey.service';

describe('TokenManagerComponent', () => {
  let component: TokenManagerComponent;
  let fixture: ComponentFixture<TokenManagerComponent>;
  let spinnerService;
  let apiKeyService;
  let displaySpinnerSpy: jasmine.Spy;
  let readUserApiKeysSpy: jasmine.Spy;
  let requestApiKeysSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        TokenManagerComponent,
        MockColumnLayoutComponent,
        MockClickRevealComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenManagerComponent);
    component = fixture.componentInstance;
    spinnerService = TestBed.get(SpinnerService);
    apiKeyService = TestBed.get(ApiKeyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call requestApiKeys', () => {
    requestApiKeysSpy = spyOn(component, 'requestApiKeys');
    component.ngOnInit();
    expect(requestApiKeysSpy).toHaveBeenCalled();
  });

  it('requestApiKeys should call spinnerService.displaySpinner()', () => {
    displaySpinnerSpy = spyOn(spinnerService, 'displaySpinner');
    component.requestApiKeys();
    expect(displaySpinnerSpy).toHaveBeenCalled();
  });

  it('requestApiKeys should call apiKeyService.readUserApiKeys()', () => {
    // readUserApiKeysSpy = spyOn(apiKeyService, 'readUserApiKeys');
    readUserApiKeysSpy = spyOn(apiKeyService, 'readUserApiKeys');
    component.requestApiKeys();
    expect(readUserApiKeysSpy).toHaveBeenCalled();
  });
});
