import { ISwagger } from './../../../interfaces/ISwagger';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPath } from 'src/app/interfaces/IPath';
import { apiReducer } from 'src/app/store/reducers/api.reducers';

@Component({
  selector: 'app-swagger-endpoint-item',
  templateUrl: './swagger-endpoint-item.component.html',
  styleUrls: ['./swagger-endpoint-item.component.scss']
})
export class SwaggerEndpointItemComponent implements OnInit {
  @Input() api: ISwagger;
  @Input() queryString: string;
  showDescription = false;
  showApiInfo = false;

  constructor() {}

  ngOnInit() {}

  toggleDescription = () => {
    this.showDescription = !this.showDescription;
  }

  highlight(endPoint: IPath) {

    if (!endPoint.url) {
      return '';
    }

    if (this.queryString === '') {
      return endPoint.url;
    }

    return endPoint.url.replace(
      this.queryString,
      `<mark>${this.queryString}</mark>`
    );
  }
}
