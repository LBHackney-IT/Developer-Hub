import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiChecklistComponent } from './api-checklist.component';

describe('ApiChecklistComponent', () => {
  let component: ApiChecklistComponent;
  let fixture: ComponentFixture<ApiChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiChecklistComponent ]
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
