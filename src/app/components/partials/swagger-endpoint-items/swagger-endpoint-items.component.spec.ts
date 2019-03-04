import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerEndpointItemsComponent } from './swagger-endpoint-items.component';
import { TestingModule } from '../../../../testing/utils';

describe('SwaggerEndpointItemsComponent', () => {
  let component: SwaggerEndpointItemsComponent;
  let fixture: ComponentFixture<SwaggerEndpointItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ SwaggerEndpointItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerEndpointItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
