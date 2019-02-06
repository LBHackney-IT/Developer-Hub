import { Component, OnInit } from '@angular/core';
import { swaggerJson } from '../../../shared/swagger';

@Component({
  selector: 'app-swagger-endpoint-items',
  templateUrl: './swagger-endpoint-items.component.html',
  styleUrls: ['./swagger-endpoint-items.component.scss']
})
export class SwaggerEndpointItemsComponent implements OnInit {
  swaggerInfoItems: object[] = swaggerJson;
  constructor() { }

  ngOnInit() {
  }



}
