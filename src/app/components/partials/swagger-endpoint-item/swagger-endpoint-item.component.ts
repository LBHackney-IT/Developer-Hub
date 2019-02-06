import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swagger-endpoint-item',
  templateUrl: './swagger-endpoint-item.component.html',
  styleUrls: ['./swagger-endpoint-item.component.scss']
})
export class SwaggerEndpointItemComponent implements OnInit {
  @Input() swaggerInfoItem: object;
  showDescription = false;
  showApiInfo = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDescription = () => {
    this.showDescription = !this.showDescription;
  }

  getNumberOfEndpoints = (): number => {
    return this.swaggerInfoItem['paths'].length;
  }

  getApiName = (path): string => {
    return Object.keys(path)[0];
  }

  getRequestType = (path): string => {
    const apiName = this.getApiName(path);
    console.log(path);
    return Object.keys(path[apiName])[0];
  }



}
