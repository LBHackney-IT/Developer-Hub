import { Component, OnInit } from '@angular/core';
import { swaggerJson } from '../../../shared/swagger';
import { ApiDataParser } from '../../../services/apiDataParser.service';

@Component({
  selector: 'app-swagger-endpoint-items',
  templateUrl: './swagger-endpoint-items.component.html',
  styleUrls: ['./swagger-endpoint-items.component.scss']
})
export class SwaggerEndpointItemsComponent implements OnInit {
  apiList: object[] = swaggerJson;
  
  constructor(private apiDataParserService: ApiDataParser) { 
    this.apiList = apiDataParserService.parse(swaggerJson);
  }

  ngOnInit() {
  }

  
  
}
