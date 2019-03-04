import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageKeysComponent } from './admin-manage-keys.component';
import { TestingModule } from '../../../../testing/utils';

describe('AdminManageKeysComponent', () => {
  let component: AdminManageKeysComponent;
  let fixture: ComponentFixture<AdminManageKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ AdminManageKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
