import { Pipe, PipeTransform } from '@angular/core';
import { ISwagger } from '../interfaces/ISwagger';
import { ApiSearch } from '../services/apiSearch.service';

@Pipe({
  name: 'filterEndpoints'
})
export class FilterEndpointsPipe implements PipeTransform {
  constructor(private searchService: ApiSearch) { }

  transform = (initialSwaggerList: ISwagger[], searchText: string): any => {
    if (searchText === '') {
      return initialSwaggerList;
    }
    const resultsFromSearch = this.searchService.search(initialSwaggerList, searchText);
    return resultsFromSearch;
  }

}
