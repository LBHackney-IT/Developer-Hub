import { ApiModel } from './apiDataParser.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ApiSearch {
    apiData: any;
    resultApiData: ApiModel[];
    query: string[];

    search = (apiData: any, formInput: string) => {
        this.apiData = apiData;
        this.resultApiData = [];
        this.query = formInput.toLowerCase().split(' ');
        
        this.populateLocalApiParentData();
        this.query.forEach(word => {
            if (word != ' ') {
                this.getMatchingEndpoints(word);
                this.apiData = this.resultApiData;
            }
        });
        return this.resultApiData;
    }

    private getMatchingEndpoints = (word: string) => {
        for (var i=0; i<this.apiData.length; i++) {
            let matchingEndpoints = this.apiData[i].endpoints.filter(function (element: any) {
                return element.tags.toString().toLowerCase().indexOf(word) > -1 ||
                    element.name.toLowerCase().indexOf(word) > -1 ||
                    element.summary.toLowerCase().indexOf(word) > -1;
            })
            this.resultApiData[i].endpoints = matchingEndpoints;
        }
    }

    private populateLocalApiParentData = () => {
        this.apiData.forEach(api => {
            let emptyApi = new ApiModel;
            emptyApi.name = api.name;
            emptyApi.endpoints = [];
            this.resultApiData.push(emptyApi);
        });
    }
}