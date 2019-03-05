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
        words.forEach(word => {
            this.filteredSwaggerEndpoints = this.getMatchingEndpoints(word);
        });

        return this.filteredSwaggerEndpoints;
    }

    private getMatchingEndpoints = (word: string) => {
        const swaggerEndpoints = this.swaggerEndpoints.filter((swaggerEndpoint) => {
            const paths = swaggerEndpoint.paths.filter((path) => {
                // Check if path summary exists
                let pass = false;
                if (path.summary) {
                    pass =  path.summary.includes(word) ? true : pass;
                }

                if (path.tags[0]) {
                    pass =  path.tags[0].includes(word) ? true : pass;
                }

                if (path.url) {
                    pass =  path.url.includes(word) ? true : pass;
                }
                return pass;
            });
            return paths.length > 0;
        });
        return swaggerEndpoints;
    }
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