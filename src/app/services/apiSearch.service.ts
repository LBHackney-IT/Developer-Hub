import { IPath } from 'src/app/interfaces/IPath';
import { Injectable } from '@angular/core';
import { ISwagger } from '../interfaces/ISwagger';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiSearch {
  //swaggerEndpoints: ISwagger[];

  search = (swaggerArray: ISwagger[], searchString: string): ISwagger[] => {
    // let filteredSearch = swaggerArray.slice();
    const filteredArray: ISwagger[] = [];

    // Array of APIs Swaggers
    swaggerArray.forEach(apiSwagger => {
      const arrayOfPaths = [];
      // Array of API Paths
      apiSwagger.paths.forEach(apiPath => {
        // Single API Path (with summary, url and title)
        if (this.isPathMatch(apiPath, searchString)) {
          arrayOfPaths.push(apiPath);
        }
      });

      if (arrayOfPaths.length > 0) {
        const filteredApi = {
          ...apiSwagger,
          paths: arrayOfPaths
        };

        filteredArray.push(filteredApi);
      }
    });

    if (searchString !== '') {;
      return filteredArray;
    }

    return swaggerArray;
  }

  isPathMatch = (path: IPath, searchString: string): boolean => {
    let pass = false;
    if (path.url) {
      pass = path.url.includes(searchString) ? true : pass;
    }
    if (path.tags[0]) {
      pass = path.tags[0].includes(searchString) ? true : pass;
    }

    if (path.url) {
      pass = path.url.includes(searchString) ? true : pass;
    }
    return pass;
  }
}
