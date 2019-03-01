import { TestBed } from '@angular/core/testing';
import { ApiKeyService } from './apiKey.service';
import { TestingModule } from '../../testing/utils';


describe('ApiKeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TestingModule
    ],
  }));

  it('should be created', () => {
    const service: ApiKeyService = TestBed.get(ApiKeyService);
    expect(service).toBeTruthy();
  });
});
