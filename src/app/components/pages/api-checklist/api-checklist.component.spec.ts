import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiChecklistComponent } from './api-checklist.component';
import { TestingModule } from '../../../../testing/utils';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';

describe('ApiChecklistComponent', () => {
  let component: ApiChecklistComponent;
  let fixture: ComponentFixture<ApiChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApiChecklistComponent,
        MockColumnLayoutComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
