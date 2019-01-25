import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickRevealComponent } from './click-reveal.component';

describe('ClickRevealComponent', () => {
  let component: ClickRevealComponent;
  let fixture: ComponentFixture<ClickRevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickRevealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
