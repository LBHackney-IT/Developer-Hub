import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ISwagger } from '../interfaces/ISwagger';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwaggerEndpointService {

  /**
   *
   * Correct URL not used for catching data yet
   * @memberof SwaggerEndpointService
   */
  url = environment.apiURL.apiService;

  swaggerEndPoints: ISwagger[];

  constructor(
    private httpClient: HttpClient
  ) { }

  getListOfSwaggerEndpoints = () => {
    return this.httpClient.get(this.url + 'swagger-paths')
    .pipe(map((response) => response['body']));
  }
}
