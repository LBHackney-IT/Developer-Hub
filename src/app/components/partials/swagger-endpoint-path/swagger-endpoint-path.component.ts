import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swagger-endpoint-path',
  templateUrl: './swagger-endpoint-path.component.html',
  styleUrls: ['./swagger-endpoint-path.component.scss']
})
export class SwaggerEndpointPathComponent implements OnInit {
  @Input() swaggerPath: object;
  constructor() { }

  ngOnInit() {
  }

  getApiName = (): string => {
    return Object.keys(this.swaggerPath)[0];
  }

}
