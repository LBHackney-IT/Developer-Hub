import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerEndpointItemComponent } from './swagger-endpoint-item.component';
import { TestingModule } from '../../../../testing/utils';

describe('SwaggerEndpointItemComponent', () => {
  let component: SwaggerEndpointItemComponent;
  let fixture: ComponentFixture<SwaggerEndpointItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ SwaggerEndpointItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerEndpointItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
