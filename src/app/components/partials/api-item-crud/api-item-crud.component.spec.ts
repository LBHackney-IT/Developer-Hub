import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiItemCrudComponent } from './api-item-crud.component';
import { TestingModule, MockStore } from '../../../../testing/utils';
import { Router } from '@angular/router';
import { generateTestApis } from '../../../../testing/mock-db';
import { Store } from '@ngrx/store';

describe('ApiItemCrudComponent', () => {
  let component: ApiItemCrudComponent;
  let fixture: ComponentFixture<ApiItemCrudComponent>;
  let navigateSpy: jasmine.Spy;
  // let dispatchSpy: jasmine.Spy;
  let router;
  // let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ ApiItemCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiItemCrudComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    // store = TestBed.get(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onEditApi', () => {
    it('should call router.navigate' , () => {
      navigateSpy = spyOn(router, 'navigate');
      component.api = generateTestApis(1)[0];
      component.onEditApi();
      expect(navigateSpy).toHaveBeenCalled();
    });

  });

  // describe('onDeleteApi', () => {
  //   xit('should call router.navigate' , () => {
  //     dispatchSpy = spyOn(store, 'dispatch');
  //     const api = generateTestApis(1)[0];
  //     component.onDeleteApi(api.id);
  //     expect(dispatchSpy).toHaveBeenCalled();
  //   });

  // });
});
