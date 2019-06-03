import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPageComponent } from './api-page.component';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';
import { MockClickRevealComponent } from '../../partials/click-reveal/click-reveal.component';
import { TestingModule } from '../../../../testing/utils';
import { MockApiPageSectionComponent } from '../../partials/api-page-section/api-page-section.component';

describe('ApiPageComponent', () => {
  let component: ApiPageComponent;
  let fixture: ComponentFixture<ApiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        ApiPageComponent,
        MockColumnLayoutComponent,
        MockClickRevealComponent,
        MockApiPageSectionComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
