import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiListComponent } from './api-list.component';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';
import { MockApiItemComponent } from '../../partials/api-item/api-item.component';
import { TestingModule, MockStore } from '../../../../testing/utils';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetApiList } from '../../../store/actions/api.actions';
import { IApiState } from '../../../store/state/api.state';
import { of } from 'rxjs';
import { generateTestApis } from '../../../../testing/mock-db';
import { OrderApisAlphabeticallyPipe } from '../../../pipes/order-apis-alphabetically.pipe';

describe('ApiListComponent', () => {
  let component: ApiListComponent;
  let fixture: ComponentFixture<ApiListComponent>;

  let store: MockStore<IAppState>;
  let dispatchSpy: jasmine.Spy;
  let subscribeSpy: jasmine.Spy;
  let getListOfApisSpy: jasmine.Spy;

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
        MockApiItemComponent,
        OrderApisAlphabeticallyPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    dispatchSpy = spyOn(store, 'dispatch');
    subscribeSpy = spyOn(store, 'subscribe').and.callFake(() => {
      return (of(generateTestApis(4)));
    });
    component.apis = generateTestApis(4);
    getListOfApisSpy = spyOn(component, 'getListOfApis');
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getListOfApis upon initialising', () => {
    expect(getListOfApisSpy).toHaveBeenCalled();
  });

  it('should call store.subscribe upon initialising', () => {
    expect(subscribeSpy).toHaveBeenCalled();
  });

  xit('getListOfApis should dispatch GetApiList action', () => {
    // store.setState({ api: initialApiState, user: initialUserState, swaggerEndpoint: initialSwaggerEndpointState});
    component.getListOfApis();
    console.log(dispatchSpy);
    expect(dispatchSpy).toHaveBeenCalled();
    // expect(dispatchSpy).toHaveBeenCalledWith(new GetApiList());
  });

  it('should call store subscribe', () => {
    expect(subscribeSpy).toHaveBeenCalled();
  });
});
