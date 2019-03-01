import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { TestingModule } from '../../testing/utils';

describe('AlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TestingModule
    ],
  }));

  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService);
    expect(service).toBeTruthy();
  });
});
