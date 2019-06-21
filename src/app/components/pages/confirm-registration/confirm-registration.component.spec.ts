import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRegistrationComponent } from './confirm-registration.component';
import { TestingModule } from '../../../../testing/utils';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConfirmRegistrationComponent', () => {
  let component: ConfirmRegistrationComponent;
  let fixture: ComponentFixture<ConfirmRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        RouterTestingModule,
      ],
      declarations: [ ConfirmRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRegistrationComponent);
    component = fixture.componentInstance;
    component.confirmRegistration = () => {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
