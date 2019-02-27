import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { TestingModule } from '../../../../testing/utils';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with six controls', () => {
    expect(Object.keys(component.registerForm.controls).length).toBe(6);
    expect(component.registerForm.contains('emailAddress')).toBe(true);
    expect(component.registerForm.contains('firstName')).toBe(true);
    expect(component.registerForm.contains('lastName')).toBe(true);
    expect(component.registerForm.contains('organisation')).toBe(true);
    expect(component.registerForm.contains('password')).toBe(true);
    expect(component.registerForm.contains('confirmPassword')).toBe(true);
  });

  it('should make the emailAddress control required', () => {
    const control = component.registerForm.get('emailAddress');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should be false if emailAddress is not provided', () => {
    const control = component.registerForm.get('emailAddress');
    control.setValue('aaaaaa');
    expect(control.valid).toBe(false);
  });

  it('should be true if emailAddress is provided', () => {
    const control = component.registerForm.get('emailAddress');
    control.setValue('aaa@email.com');
    expect(control.valid).toBe(true);
  });

  it('should not be valid if firstName control is not set', () => {
    const control = component.registerForm.get('firstName');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should not be valid if firstName control has a length < 3', () => {
    const control = component.registerForm.get('firstName');
    control.setValue('a'.repeat(2));
    expect(control.valid).toBe(false);
  });

  it('should be valid if firstName control has a length >= 3', () => {
    const control = component.registerForm.get('firstName');
    control.setValue('a'.repeat(3));
    expect(control.valid).toBe(true);
  });

  it('should not be valid if lastName control is not set', () => {
    const control = component.registerForm.get('lastName');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should not be valid if lastName control has a length < 3', () => {
    const control = component.registerForm.get('lastName');
    control.setValue('a'.repeat(2));
    expect(control.valid).toBe(false);
  });

  it('should be valid if lastName control has a length >= 3', () => {
    const control = component.registerForm.get('lastName');
    control.setValue('a'.repeat(3));
    expect(control.valid).toBe(true);
  });

  it('should not be valid if organisation control has a length < 3', () => {
    const control = component.registerForm.get('organisation');
    control.setValue('a'.repeat(2));
    expect(control.valid).toBe(false);
  });

  it('should be valid if organisation control has a length >= 3', () => {
    const control = component.registerForm.get('organisation');
    control.setValue('a'.repeat(3));
    expect(control.valid).toBe(true);
  });

  it('should be false if password control is not set', () => {
    const control = component.registerForm.get('password');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should be false if password control has a min length < 8', () => {
    const control = component.registerForm.get('password');
    control.setValue('Ab1!');
    expect(control.valid).toBe(false);
  });

  it('should be true if password control has a min length >= 8', () => {
    const control = component.registerForm.get('password');
    control.setValue('Ab1!'.repeat(2));
    expect(control.valid).toBe(true);
  });

  it('should be false if password control does not match regex', () => {
    const control = component.registerForm.get('password');
    control.setValue('Aa'.repeat(4));
    expect(RegExp(component.regEx).test(control.value)).toBe(false);
    expect(control.valid).toBe(false);
  });

  it('should be true if password control does match regex', () => {
    const control = component.registerForm.get('password');
    control.setValue('Ab1!'.repeat(2));
    expect(RegExp(component.regEx).test(control.value)).toBe(true);
    expect(control.valid).toBe(true);
  });

  // 
  it('should be false if confirmPassword control is not set', () => {
    const control = component.registerForm.get('confirmPassword');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should be false if confirmPassword control has a min length < 8', () => {
    const control = component.registerForm.get('confirmPassword');
    control.setValue('Ab1!');
    expect(control.valid).toBe(false);
  });

  it('should be true if confirmPassword control has a min length >= 8', () => {
    const control = component.registerForm.get('confirmPassword');
    control.setValue('Ab1!'.repeat(2));
    expect(control.valid).toBe(true);
  });

  it('should be false if confirmPassword control does not match regex', () => {
    const control = component.registerForm.get('confirmPassword');
    control.setValue('Aa'.repeat(4));
    expect(RegExp(component.regEx).test(control.value)).toBe(false);
    expect(control.valid).toBe(false);
  });

  it('should be true if confirmPassword control does match regex', () => {
    const control = component.registerForm.get('confirmPassword');
    control.setValue('Ab1!'.repeat(2));
    expect(RegExp(component.regEx).test(control.value)).toBe(true);
    expect(control.valid).toBe(true);
  });

});
