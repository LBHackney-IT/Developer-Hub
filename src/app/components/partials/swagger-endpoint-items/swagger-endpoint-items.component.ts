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
  apiList: object[] = swaggerJson;
  swaggerEndpoints: ISwagger[];

  constructor(
    private apiDataParserService: ApiDataParser,
    private store: Store<IAppState>,
    private swaggerEndpointService: SwaggerEndpointService
    ) {
  }

  ngOnInit() {
    this.apiList = this.apiDataParserService.parse(swaggerJson);

    this.getSwaggerEndpointList();
    this.store.pipe(select(selectSwaggerEndpoints)).subscribe((response) => {
      // this.swaggerEndpoints = response;
      console.log('store', response);
    });
  }

  getSwaggerEndpointList = () => {
    this.store.dispatch(new GetSwaggerEndpointList());
    this.swaggerEndpointService.getListOfSwaggerEndpoints().subscribe((response: ISwagger[]) => {
      this.swaggerEndpoints = response;
      console.log(this.swaggerEndpoints);
    });
  }



}
