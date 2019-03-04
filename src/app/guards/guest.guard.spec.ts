import { TestBed, async, inject } from '@angular/core/testing';

import { GuestGuard } from './guest.guard';
import { TestingModule } from '../../testing/utils';

describe('GuestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      providers: [GuestGuard]
    });
  });

  it('should ...', inject([GuestGuard], (guard: GuestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
