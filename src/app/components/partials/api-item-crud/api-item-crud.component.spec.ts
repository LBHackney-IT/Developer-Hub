import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiItemCrudComponent } from './api-item-crud.component';
import { TestingModule } from '../../../../testing/utils';

describe('ApiItemEditComponent', () => {
  let component: ApiItemCrudComponent;
  let fixture: ComponentFixture<ApiItemCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ ApiItemCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiItemCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
