import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationComponent } from './documentation.component';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';
import { MockSwaggerEndpointPageComponent } from '../swagger-endpoint-page/swagger-endpoint-page.component';
import { MockSwaggerEndpointItemsComponent } from '../../partials/swagger-endpoint-items/swagger-endpoint-items.component';

describe('DocumentationComponent', () => {
  let component: DocumentationComponent;
  let fixture: ComponentFixture<DocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocumentationComponent,
        MockColumnLayoutComponent,
        MockSwaggerEndpointItemsComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
