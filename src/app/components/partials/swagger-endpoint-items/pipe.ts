import { Pipe, PipeTransform } from '@angular/core'
import { ApiSearch } from '../../../services/apiSearch.service';

@Pipe({
    name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {
    
    constructor(private searchService: ApiSearch) { }

    transform = (apiData: any, formInput: string) => {
        console.log(formInput)
        if (formInput && !this.isEmpty(formInput)) {
            return this.searchService.search(apiData, formInput);
        }
        return apiData;
    }

    private isEmpty = (input: string) => {
        return (input.replace(/\s/g, "").length > 0 ? false : true);
    }
}
