import { Injectable } from '@angular/core';
import { ISwagger } from '../interfaces/ISwagger';

@Injectable({
    providedIn: 'root'
  })
export class ApiSearch {
    swaggerEndpoints: ISwagger[];
    filteredSwaggerEndpoints = [];
    search = (swaggerEndpoints: ISwagger[], searchText: string) => {
        const words = searchText.toLowerCase().split(' ');
        this.swaggerEndpoints = swaggerEndpoints;
        // words.forEach(word => {
        //     this.filteredSwaggerEndpoints = this.getMatchingEndpoints(word);
        // });
        this.filteredSwaggerEndpoints = this.getMatchingEndpoints(searchText);

        console.log(this.filteredSwaggerEndpoints);

        return this.filteredSwaggerEndpoints;
    }


    private getMatchingEndpoints = (word: string) => {
        const swaggerEndpoints = this.swaggerEndpoints.filter((swaggerEndpoint) => {
            swaggerEndpoint.paths =  swaggerEndpoint.paths.filter((path) => {
                // Check if path summary exists
                if (path.summary) {
                    return path.tags[0].toLowerCase().includes(word) ||
                    path.url.includes(word) ||
                    path.summary.includes(word);
                } else {
                    return path.tags[0].toLowerCase().includes(word) ||
                    path.url.includes(word);
                }

            });

            return swaggerEndpoint.paths.length > 0;

        });
        return swaggerEndpoints;
    }


    // private getMatchingEndpoints = (word: string) => {
    //     for (var i=0; i<this.apiData.length; i++) {
    //         let matchingEndpoints = this.apiData[i].paths.filter(function (element: any) {
    //             return element.tags.toString().toLowerCase().indexOf(word) > -1 ||
    //                 element.url.toLowerCase().indexOf(word) > -1 ||
    //                 element.summary.toLowerCase().indexOf(word) > -1;
    //         })
    //         this.resultApiData[i].paths = matchingEndpoints;
    //     }
    // }


    // private populateLocalApiParentData = () => {
    //     this.apiData.forEach(api => {
    //         let emptyApi = new ApiModel;
    //         emptyApi.title = api.title;
    //         emptyApi.paths = [];
    //         this.resultApiData.push(emptyApi);
    //     });
    // }
}

export class ApiModel {
    title: string;
    description: string;
    id: string;
    lastUpdated: number;
    paths: ApiEndpointModel[];
}

export class ApiEndpointModel {
    name: string;
    method: string;
    summary: string;
    parameters: any;
    responses: any;
    tags: string[];
}