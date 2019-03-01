import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { TestingModule } from '../../testing/utils';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TestingModule
    ],
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
