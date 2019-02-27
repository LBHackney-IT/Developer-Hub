import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent, MockHomeComponent } from './home.component';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockHomeComponent,
        MockColumnLayoutComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
