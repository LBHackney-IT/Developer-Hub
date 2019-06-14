import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionSectionComponent } from './accordion-section.component';
import { MockClickRevealComponent } from '../click-reveal/click-reveal.component';
import { TestingModule } from '../../../../testing/utils';
import { generateRandomApi } from '../../../../testing/mock-db';

describe('AccordionSectionComponent', () => {
  let component: AccordionSectionComponent;
  let fixture: ComponentFixture<AccordionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        AccordionSectionComponent,
        MockClickRevealComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionSectionComponent);
    component = fixture.componentInstance;
    const api = generateRandomApi();
    component.api = api;
    component.title = 'Title';
    component.display = true;
    component.stage = api.production;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
