import { Component, OnInit, Input } from '@angular/core';
import { swaggerJson } from '../../../shared/swagger';

@Component({
  selector: 'app-swagger-endpoint-item',
  templateUrl: './swagger-endpoint-item.component.html',
  styleUrls: ['./swagger-endpoint-item.component.scss']
})
export class SwaggerEndpointItemComponent implements OnInit {
  @Input() api: object;
  showDescription = false;
  showApiInfo = false;

  constructor() { 
  }

  ngOnInit() {
  }

  toggleDescription = () => {
    this.showDescription = !this.showDescription;
  }
}
