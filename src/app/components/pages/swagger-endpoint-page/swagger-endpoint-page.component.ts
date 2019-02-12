import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-swagger-endpoint-page',
  templateUrl: './swagger-endpoint-page.component.html',
  styleUrls: ['./swagger-endpoint-page.component.scss']
})
export class SwaggerEndpointPageComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const apiID = this.route.snapshot.paramMap.get('apiID');
    const endpointID = this.route.snapshot.paramMap.get('endpointID');
    console.log(apiID, endpointID);
    // this.getEndpoint
  }

  getEndpoint = async (apiId: string, endpointId: string) => {
    await this.apiService.getApiEndpoint(apiId, endpointId)
    .subscribe(
      (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
    );
  }
}
