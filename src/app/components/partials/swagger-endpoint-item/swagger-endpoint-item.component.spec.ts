import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerEndpointItemComponent } from './swagger-endpoint-item.component';

describe('SwaggerEndpointItemComponent', () => {
  let component: SwaggerEndpointItemComponent;
  let fixture: ComponentFixture<SwaggerEndpointItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaggerEndpointItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerEndpointItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
