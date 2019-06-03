import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPageSectionComponent } from './api-page-section.component';
import { TestingModule } from '../../../../testing/utils';
import { MockClickRevealComponent } from '../click-reveal/click-reveal.component';

describe('ApiPageSectionComponent', () => {
  let component: ApiPageSectionComponent;
  let fixture: ComponentFixture<ApiPageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [
        ApiPageSectionComponent,
        MockClickRevealComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
