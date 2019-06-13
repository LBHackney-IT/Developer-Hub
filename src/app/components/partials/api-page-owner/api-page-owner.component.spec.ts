import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPageOwnerComponent } from './api-page-owner.component';
import { generateRandomApi } from '../../../../testing/mock-db';

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
    const api = generateRandomApi();
    component = fixture.componentInstance;
    component.owner = api.owner;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
