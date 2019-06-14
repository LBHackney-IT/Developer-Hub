import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPageCompliancyComponent } from './api-page-compliancy.component';
import { generateRandomApi } from '../../../../testing/mock-db';

describe('ApiPageCompliancyComponent', () => {
  let component: ApiPageCompliancyComponent;
  let fixture: ComponentFixture<ApiPageCompliancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiPageCompliancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPageCompliancyComponent);
    component = fixture.componentInstance;
    component.compliance = generateRandomApi().compliant;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
