import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { TestingModule } from '../../../../testing/utils';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ ForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with one control', () => {
    expect(Object.keys(component.forgotPasswordForm.controls).length).toBe(1);
    expect(component.forgotPasswordForm.contains('emailAddress')).toBe(true);
  });

  it('should make the emailAddress control required', () => {
    const control = component.forgotPasswordForm.get('emailAddress');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should be false if emailAddress is not provided', () => {
    const control = component.forgotPasswordForm.get('emailAddress');
    control.setValue('aaaaaa');
    expect(control.valid).toBe(false);
  });

  it('should be true if emailAddress is provided', () => {
    const control = component.forgotPasswordForm.get('emailAddress');
    control.setValue('aaa@email.com');
    expect(control.valid).toBe(true);
  });
});
