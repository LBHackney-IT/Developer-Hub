import { TestBed } from '@angular/core/testing';

import { SwaggerEndpointService } from './swagger-endpoint.service';
import { TestingModule } from '../../testing/utils';

describe('SwaggerEndpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TestingModule
    ],
  }));

  it('should be created', () => {
    const service: SwaggerEndpointService = TestBed.get(SwaggerEndpointService);
    expect(service).toBeTruthy();
  });
});
