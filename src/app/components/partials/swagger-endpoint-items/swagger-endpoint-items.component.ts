import { Component, OnInit } from '@angular/core';
import { swaggerJson } from '../../../shared/swagger';
import { ApiDataParser } from '../../../services/apiDataParser.service';
import { ISwagger } from 'src/app/interfaces/ISwagger';
import { GetSwaggerEndpointList } from '../../../store/actions/swagger-endpoints.action';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { selectSwaggerEndpoints } from '../../../store/selectors/swagger-endpoints.selectors';
import { SwaggerEndpointService } from '../../../services/swagger-endpoint.service';

@Component({
  selector: 'app-swagger-endpoint-items',
  templateUrl: './swagger-endpoint-items.component.html',
  styleUrls: ['./swagger-endpoint-items.component.scss']
})
export class SwaggerEndpointItemsComponent implements OnInit {
  swaggerEndpoints: ISwagger[];

  constructor(
    private apiDataParserService: ApiDataParser,
    private store: Store<IAppState>,
    private swaggerEndpointService: SwaggerEndpointService
    ) {
  }

  ngOnInit() {
    this.getSwaggerEndpointList();
    this.store.pipe(select(selectSwaggerEndpoints)).subscribe((response) => {
      console.log(response);
    });
  }

  getSwaggerEndpointList = () => {
    this.store.dispatch(new GetSwaggerEndpointList());
    this.swaggerEndpointService.getListOfSwaggerEndpoints().subscribe((response: ISwagger[]) => {
      this.swaggerEndpoints = response;
    });
  }
}

@Component({
  selector: 'app-swagger-endpoint-items',
  template: ''
})
export class MockSwaggerEndpointItemsComponent {
}
