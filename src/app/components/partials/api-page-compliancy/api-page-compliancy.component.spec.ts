import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPageCompliancyComponent } from './api-page-compliancy.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
