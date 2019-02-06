import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerEndpointItemsComponent } from './swagger-endpoint-items.component';

describe('SwaggerEndpointItemsComponent', () => {
  let component: SwaggerEndpointItemsComponent;
  let fixture: ComponentFixture<SwaggerEndpointItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaggerEndpointItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerEndpointItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
