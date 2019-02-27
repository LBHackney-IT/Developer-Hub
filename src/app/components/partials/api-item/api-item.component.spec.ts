import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiItemComponent } from './api-item.component';
import { TestingModule } from '../../../../testing/utils';

describe('ApiItemComponent', () => {
  let component: ApiItemComponent;
  let fixture: ComponentFixture<ApiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ ApiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
