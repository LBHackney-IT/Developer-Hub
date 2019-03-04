import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGuideComponent } from './api-guide.component';
import { TestingModule } from '../../../../testing/utils';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';

describe('ApiGuideComponent', () => {
  let component: ApiGuideComponent;
  let fixture: ComponentFixture<ApiGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApiGuideComponent,
        MockColumnLayoutComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
