import { TestBed, async, inject } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import { TestingModule } from '../../testing/utils';

describe('AdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      providers: [AdminGuard]
    });
  });

  it('should ...', inject([AdminGuard], (guard: AdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
