import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerEndpointPageComponent } from './swagger-endpoint-page.component';

describe('SwaggerEndpointPageComponent', () => {
  let component: SwaggerEndpointPageComponent;
  let fixture: ComponentFixture<SwaggerEndpointPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaggerEndpointPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerEndpointPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
