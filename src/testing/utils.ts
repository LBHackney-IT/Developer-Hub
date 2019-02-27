import { Injectable, NgModule, Component } from '@angular/core';
import {
    Store,
    StateObservable,
    ActionsSubject,
    ReducerManager,
    StoreModule
} from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app/app-routing.module';

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


export function provideMockStore() {
    return {
        provide: Store,
        useClass: MockStore
    };
}

@NgModule({
    imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [provideMockStore()],
    exports: [
        RouterTestingModule,
        ReactiveFormsModule
    ]
})
export class TestingModule {
    constructor() { }
}

