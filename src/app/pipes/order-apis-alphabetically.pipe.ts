import { Pipe, PipeTransform } from '@angular/core';
import { IApi } from '../interfaces/IApi';

@Pipe({
  name: 'orderApisAlphabetically'
})
export class OrderApisAlphabeticallyPipe implements PipeTransform {

  transform(listOfApis: IApi[], args?: any): IApi[] {
    return listOfApis.sort((a, b) => {
      return a.title.charCodeAt(0) - b.title.charCodeAt(0);
    });
  }
}
