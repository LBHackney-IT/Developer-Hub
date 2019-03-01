import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { TestingModule } from '../../../../testing/utils';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ ChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with two controls', () => {
    expect(Object.keys(component.changePasswordForm.controls).length).toBe(2);
    expect(component.changePasswordForm.contains('password')).toBe(true);
    expect(component.changePasswordForm.contains('confirmPassword')).toBe(true);
  });

  it('should be false if password control is not set', () => {
    const control = component.changePasswordForm.get('password');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should be false if password control has a min length < 8', () => {
    const control = component.changePasswordForm.get('password');
    control.setValue('a'.repeat(7));
    expect(control.valid).toBe(false);
  });

  it('should be true if password control has a min length >= 8', () => {
    const control = component.changePasswordForm.get('password');
    control.setValue('a'.repeat(8));
    expect(control.valid).toBe(true);
  });

  it('should be false if confirmPassword control is not set', () => {
    const control = component.changePasswordForm.get('confirmPassword');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should be false if confirmPassword control has a min length < 8', () => {
    const control = component.changePasswordForm.get('confirmPassword');
    control.setValue('a'.repeat(7));
    expect(control.valid).toBe(false);
  });

  it('should be true if confirmPassword control has a min length >= 8', () => {
    const confirmPasswordControl = component.changePasswordForm.get('confirmPassword');
    const passwordControl = component.changePasswordForm.get('password');
    passwordControl.setValue('Ab1!'.repeat(2));
    confirmPasswordControl.setValue('Ab1!'.repeat(2));
    expect(confirmPasswordControl.valid).toBe(true);
  });
});
