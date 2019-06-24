import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageKeysComponent } from './admin-manage-keys.component';
import { TestingModule } from '../../../../testing/utils';
import * as sinon from 'sinon';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
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
    const getUnverifiedKeysStub = sinon.stub(component, 'getUnverifiedKeys');
    component.getUnverifiedKeys = getUnverifiedKeysStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
