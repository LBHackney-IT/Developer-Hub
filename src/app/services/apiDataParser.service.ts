import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiDataParser {
    parse = (swaggerData) => {
        
        swaggerData.forEach(api => {
            api.paths.forEach(endpoint => {
                endpoint.tags.push(api.title);
                if (endpoint.summary == null) {
                    endpoint.summary = '';
                }
            });
        });
        return swaggerData;
    }
}
