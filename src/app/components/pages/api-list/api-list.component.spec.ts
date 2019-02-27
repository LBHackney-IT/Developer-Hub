import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiListComponent } from './api-list.component';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';
import { MockApiItemComponent } from '../../partials/api-item/api-item.component';
import { TestingModule } from '../../../../testing/utils';

describe('ApiListComponent', () => {
  let component: ApiListComponent;
  let fixture: ComponentFixture<ApiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        ApiListComponent,
        MockColumnLayoutComponent,
        MockApiItemComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
