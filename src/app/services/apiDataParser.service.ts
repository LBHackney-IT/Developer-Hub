import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiDataParser {
    parse = (swaggerData) => {
        let finalData: ApiModel[] = []

        swaggerData.forEach(apiJson => {
            // setting name
            let api = new ApiModel
            api.name = apiJson.name
            
            api.endpoints = []
            for (var i=0; i<apiJson.paths.length; i++) {
                let endpoint = new ApiEndpointModel
                endpoint.name = Object.keys(apiJson.paths[i])[0]
                endpoint.method = Object.keys(apiJson.paths[i][endpoint.name])[0]

                let innerObj = apiJson.paths[i][endpoint.name][endpoint.method]
                endpoint.summary = innerObj.summary
                endpoint.parameters = innerObj.parameters
                endpoint.responses = innerObj.responses
                endpoint.tags = innerObj.tags
                endpoint.tags.push(api.name)

                api.endpoints.push(endpoint)
            }
            finalData.push(api)
        })
        return finalData        
    }
}

export class ApiModel {
    name: string
    endpoints: ApiEndpointModel[]
}

export class ApiEndpointModel {
    name: string
    method: string
    summary: string
    parameters: any
    responses: any
    tags: string[]
}
