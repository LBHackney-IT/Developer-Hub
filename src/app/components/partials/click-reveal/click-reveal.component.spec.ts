import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickRevealComponent } from './click-reveal.component';
import { TestingModule } from '../../../../testing/utils';

describe('ClickRevealComponent', () => {
  let component: ClickRevealComponent;
  let fixture: ComponentFixture<ClickRevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [
      //   TestingModule
      // ],
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
