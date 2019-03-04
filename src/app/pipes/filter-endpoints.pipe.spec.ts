import { FilterEndpointsPipe } from './filter-endpoints.pipe';
import { ApiSearch } from '../services/apiSearch.service';

describe('FilterEndpointsPipe', () => {
  it('create an instance', () => {
    const searchService: ApiSearch = new ApiSearch();
    const pipe = new FilterEndpointsPipe(searchService);
    expect(pipe).toBeTruthy();
  });
});
