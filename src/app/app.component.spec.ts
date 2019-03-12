import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { TestingModule} from '../testing/utils';
import { MockHeaderComponent } from './components/partials/header/header.component';
import { MockPhaseBannerComponent } from './components/partials/phase-banner/phase-banner.component';
import { MockFooterComponent } from './components/partials/footer/footer.component';
import { MockAlertComponent } from './components/partials/alert/alert.component';
import { MockSpinnerComponent } from './components/partials/spinner/spinner.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
      ],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockPhaseBannerComponent,
        MockAlertComponent,
        MockFooterComponent,
        MockSpinnerComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Developer-Hub-Frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Developer-Hub-Frontend');
  });
});

