import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TestingModule } from '../../../../testing/utils';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        LoginComponent,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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
    expect(Object.keys(component.loginForm.controls).length).toBe(2);
    expect(component.loginForm.contains('emailAddress')).toBe(true);
    expect(component.loginForm.contains('password')).toBe(true);
  });

  it('should make the emailAddress control required', () => {
    const control = component.loginForm.get('emailAddress');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should be false if emailAddress is not provided', () => {
    const control = component.loginForm.get('emailAddress');
    control.setValue('aaaaaa');
    expect(control.valid).toBe(false);
  });

  it('should be true if emailAddress is provided', () => {
    const control = component.loginForm.get('emailAddress');
    control.setValue('aaa@email.com');
    expect(control.valid).toBe(true);
  });

  it('should be false if password control is not set', () => {
    const control = component.loginForm.get('password');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should be false if password control has a min length < 8', () => {
    const control = component.loginForm.get('password');
    control.setValue('a'.repeat(7));
    expect(control.valid).toBe(false);
  });

  it('should be true if password control has a min length >= 8', () => {
    const control = component.loginForm.get('password');
    control.setValue('a'.repeat(8));
    expect(control.valid).toBe(true);
  });
});
