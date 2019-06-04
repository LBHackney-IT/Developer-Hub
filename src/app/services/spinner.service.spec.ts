import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: SpinnerService = TestBed.get(SpinnerService);
    expect(service).toBeTruthy();
  });
});
