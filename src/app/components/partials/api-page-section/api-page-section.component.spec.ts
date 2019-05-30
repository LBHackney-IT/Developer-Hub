import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPageSectionComponent } from './api-page-section.component';

describe('ApiPageSectionComponent', () => {
  let component: ApiPageSectionComponent;
  let fixture: ComponentFixture<ApiPageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiPageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
