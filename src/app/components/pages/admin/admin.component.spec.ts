import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { MockAdminManageKeysComponent } from '../../partials/admin-manage-keys/admin-manage-keys.component';
import { MockTabComponent } from '../../partials/tabs/tab/tab.component';
import { MockAdminApiListComponent } from '../admin-api-list/admin-api-list.component';
import { MockTabsComponent } from '../../partials/tabs/tabs.component';
import { TestingModule } from '../../../../testing/utils';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        AdminComponent,
        MockAdminManageKeysComponent,
        MockTabComponent,
        MockAdminApiListComponent,
        MockTabsComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
