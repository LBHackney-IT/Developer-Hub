import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})

export class AppInitService {
    constructor(private apiService: ApiService) {
    }

    Init() {
        return new Promise<void>((resolve, reject) => {
            console.log('AppInitService.init() called');
            console.log(this.apiService.getListOfApis());
            setTimeout(() => {
                console.log('AppInitService Finished');
                resolve();
            }, 500);
        })
    }

}
