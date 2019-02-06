import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiItemEditComponent } from './api-item-edit.component';

describe('ApiItemEditComponent', () => {
  let component: ApiItemEditComponent;
  let fixture: ComponentFixture<ApiItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
