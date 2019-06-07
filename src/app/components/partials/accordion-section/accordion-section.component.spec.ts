import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionSectionComponent } from './accordion-section.component';

describe('AccordionSectionComponent', () => {
  let component: AccordionSectionComponent;
  let fixture: ComponentFixture<AccordionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
