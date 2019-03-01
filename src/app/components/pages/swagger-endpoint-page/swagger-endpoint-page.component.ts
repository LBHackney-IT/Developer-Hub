import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ISwagger } from '../../../interfaces/ISwagger';
import { IPath } from '../../../interfaces/IPath';
import { IPathParameter } from '../../../interfaces/IPathParameters';

@Component({
  selector: 'app-swagger-endpoint-page',
  templateUrl: './swagger-endpoint-page.component.html',
  styleUrls: ['./swagger-endpoint-page.component.scss']
})
export class SwaggerEndpointPageComponent implements OnInit {
  private apiEndpoint: ISwagger;
  private path: IPath;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const apiID = this.route.snapshot.paramMap.get('apiID');
    const endpointID = this.route.snapshot.paramMap.get('endpointID');
    this.getEndpoint(apiID, endpointID);
    console.log(this.apiEndpoint, this.path);
  }

 getEndpoint = async (apiId: string, endpointId: string) => {
    await this.apiService.getApiEndpoint(apiId, endpointId)
    .subscribe(
      (response) => {
        this.apiEndpoint = response;
        this.path = this.apiEndpoint['paths'][0];
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
    );
  }

  getParameters = (path: IPath): IPathParameter[] => {
    return path.parameters;
  }
}

@Component({
  selector: 'app-swagger-endpoint-page',
  template: ''
})
export class MockSwaggerEndpointPageComponent {
}
