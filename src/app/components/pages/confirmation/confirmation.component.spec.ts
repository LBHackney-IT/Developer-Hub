import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationComponent } from './confirmation.component';
import { ActivatedRoute } from '@angular/router';
import { MockActivatedRoute, TestingModule } from '../../../../testing/utils';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;
  // let activatedRoute: MockActivatedRoute;
  let getTypeFromUriSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ConfirmationComponent],
      // providers: [{ provide: ActivatedRoute, useClass: MockActivatedRoute }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    component.type = 'forgot-password';

    getTypeFromUriSpy = spyOn(component, 'getTypeFromUri');
    getTypeFromUriSpy.and.returnValue('forgot-password');

    // activatedRoute = jasmine.createSpyObj('ConfirmationComponent'['getTypeFromUri']).and.returnValue('forgot-password');

    // activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    // activatedRoute.testParamMap = { type: 'forgot-password' };
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
