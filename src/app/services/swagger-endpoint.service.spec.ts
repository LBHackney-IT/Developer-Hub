import { TestBed } from '@angular/core/testing';

import { SwaggerEndpointService } from './swagger-endpoint.service';

describe('SwaggerEndpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwaggerEndpointService = TestBed.get(SwaggerEndpointService);
    expect(service).toBeTruthy();
  });
});
