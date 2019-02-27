import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenManagerComponent } from './token-manager.component';
import { MockColumnLayoutComponent } from '../../partials/column-layout/column-layout.component';
import { MockClickRevealComponent } from '../../partials/click-reveal/click-reveal.component';
import { TestingModule } from '../../../../testing/utils';

describe('TokenManagerComponent', () => {
  let component: TokenManagerComponent;
  let fixture: ComponentFixture<TokenManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        TokenManagerComponent,
        MockColumnLayoutComponent,
        MockClickRevealComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
