import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiListComponent } from './api-list.component';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';
import { MockApiItemComponent } from '../../partials/api-item/api-item.component';
import { TestingModule, MockStore } from '../../../../testing/utils';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetApiList } from '../../../store/actions/api.actions';
import { initialApiState, IApiState } from '../../../store/state/api.state';
import { initialUserState } from '../../../store/state/user.state';
import { initialSwaggerEndpointState } from '../../../store/state/swagger-endpoints.state';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/from';
describe('ApiListComponent', () => {
  let component: ApiListComponent;
  let fixture: ComponentFixture<ApiListComponent>;

  let store: MockStore<IAppState>;
  let dispatchSpy: jasmine.Spy;
  let dispatchSubscribe: jasmine.Spy;
  const apiState: IApiState = {
    apis: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        ApiListComponent,
        MockColumnLayoutComponent,
        MockApiItemComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    dispatchSpy = spyOn(store, 'dispatch');
    // spyOn(store, 'subscribe').and.callFake(() => {
    //   return Observable.from(apis);
    // });

    dispatchSubscribe = spyOn(store, 'subscribe').and.returnValue(of(apis));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch GetApiList action', () => {
    // store.setState({ api: initialApiState, user: initialUserState, swaggerEndpoint: initialSwaggerEndpointState});
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(new GetApiList());
  });

  it('should call store subscribe', () => {

  });
});
