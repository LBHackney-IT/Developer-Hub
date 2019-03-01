import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiItemEditComponent } from './api-item-edit.component';
import { TestingModule } from '../../../../testing/utils';

describe('ApiItemEditComponent', () => {
  let component: ApiItemEditComponent;
  let fixture: ComponentFixture<ApiItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
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
