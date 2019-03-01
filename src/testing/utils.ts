import { Injectable, NgModule, Component } from '@angular/core';
import {
    Store,
    StateObservable,
    ActionsSubject,
    ReducerManager,
    StoreModule
} from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { MockAppComponent } from '../app/app.component';

// Mock Store
@Injectable()
export class MockStore<T> extends Store<T> {
    private stateSubject = new BehaviorSubject<T>({} as T);

    constructor(
        state$: StateObservable,
        actionsObserver: ActionsSubject,
        reducerManager: ReducerManager
    ) {
        super(state$, actionsObserver, reducerManager);
        this.source = this.stateSubject.asObservable();
    }

    setState(nextState: T) {
        this.stateSubject.next(nextState);
    }
}


const provideMockStore = () => {
    return {
        provide: Store,
        useClass: MockStore
    };
};

const provideMockActivatedRoute = () => {
    return {
        provide: ActivatedRoute,
        useClass: MockActivatedRoute
    };
};

@Injectable()
export class MockActivatedRoute {

    private subjectParamMap = new BehaviorSubject(convertToParamMap(this.testParamMap));
    paramMap = this.subjectParamMap.asObservable();


    private _testParamMap: ParamMap;
    get testParamMap() {
        return this._testParamMap;
    }
    set testParamMap(params: {}) {
        this._testParamMap = convertToParamMap(params);
        this.subjectParamMap.next(this._testParamMap);
    }

    private subjectQueryParamMap = new BehaviorSubject(convertToParamMap(this.testParamMap));
    queryParamMap = this.subjectQueryParamMap.asObservable();

    private _testQueryParamMap: ParamMap;
    get testQueryParamMap() {
        return this._testQueryParamMap;
    }
    set testQueryParamMap(params: {}) {
        this._testQueryParamMap = convertToParamMap(params);
        this.subjectQueryParamMap.next(this._testQueryParamMap);
    }

    get snapshot() {
        return {
            paramMap: this.testParamMap,
            queryParamMap: this.testQueryParamMap
        };
    }
}


@Injectable({
    providedIn: 'root'
  })
  class MockAuthService {
    getCurrentUser = () => {
      return {
      };
    }

    generatePoolData = () => {
        return {
            UserPoolId: 'xxxxxxx',
            ClientId: 'xxxxx'
        };
    }

    confirmRegistration = () => {
        return;
      }
  }

/**
 * @export
 * @class TestingModule
 */
@NgModule({
    imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        // CommonModule
    ],
    // declarations: [
    //     MockAppComponent
    // ],
    providers: [
        provideMockStore(),
        // MockAuthService
    ],
    exports: [
        RouterTestingModule,
        ReactiveFormsModule
    ]
})
export class TestingModule {
    constructor() { }
}

