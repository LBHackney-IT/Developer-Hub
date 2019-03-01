import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnLayoutComponent } from './column-layout.component';
import { MockSideNavbarComponent } from '../side-navbar/side-navbar.component';

describe('ColumnLayoutComponent', () => {
  let component: ColumnLayoutComponent;
  let fixture: ComponentFixture<ColumnLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ColumnLayoutComponent,
        MockSideNavbarComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
