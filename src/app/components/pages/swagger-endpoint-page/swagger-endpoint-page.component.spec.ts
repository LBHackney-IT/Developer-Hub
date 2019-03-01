import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerEndpointPageComponent } from './swagger-endpoint-page.component';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';
import { TestingModule } from '../../../../testing/utils';

describe('SwaggerEndpointPageComponent', () => {
  let component: SwaggerEndpointPageComponent;
  let fixture: ComponentFixture<SwaggerEndpointPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        SwaggerEndpointPageComponent,
        MockColumnLayoutComponent
      ]
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
