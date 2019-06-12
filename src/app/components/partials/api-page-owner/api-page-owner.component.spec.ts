import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPageOwnerComponent } from './api-page-owner.component';

describe('ApiPageOwnerComponent', () => {
  let component: ApiPageOwnerComponent;
  let fixture: ComponentFixture<ApiPageOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiPageOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPageOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
