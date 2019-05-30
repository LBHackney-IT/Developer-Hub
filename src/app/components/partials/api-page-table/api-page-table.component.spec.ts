import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPageTableComponent } from './api-page-table.component';

describe('ApiPageTableComponent', () => {
  let component: ApiPageTableComponent;
  let fixture: ComponentFixture<ApiPageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiPageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
