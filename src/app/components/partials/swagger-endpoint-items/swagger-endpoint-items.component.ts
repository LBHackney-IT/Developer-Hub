import { Component, OnInit, Input } from '@angular/core';
import { ISwagger } from 'src/app/interfaces/ISwagger';
import { GetSwaggerEndpointList } from '../../../store/actions/swagger-endpoints.action';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { selectSwaggerEndpoints } from '../../../store/selectors/swagger-endpoints.selectors';
import { SwaggerEndpointService } from '../../../services/swagger-endpoint.service';
import { SpinnerService } from '../../../services/spinner.service';

@Component({
  selector: 'app-swagger-endpoint-items',
  templateUrl: './swagger-endpoint-items.component.html',
  styleUrls: ['./swagger-endpoint-items.component.scss']
})
export class SwaggerEndpointItemsComponent implements OnInit {
  queryString = '';
  swaggerEndpoints: ISwagger[];
  api: ISwagger;

  constructor(
    private store: Store<IAppState>,
    private swaggerEndpointService: SwaggerEndpointService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.getSwaggerEndpointList();
    this.store.pipe(select(selectSwaggerEndpoints)).subscribe(response => {
      console.log(response);
    });
  }

  getSwaggerEndpointList = () => {
    this.store.dispatch(new GetSwaggerEndpointList());
    this.spinnerService.displaySpinner();
    this.swaggerEndpointService
      .getListOfSwaggerEndpoints()
      .subscribe((response: ISwagger[]) => {
        this.spinnerService.hideSpinner();
        this.swaggerEndpoints = response;
      });
  }
}

@Component({
  selector: 'app-swagger-endpoint-items',
  template: ''
})
export class MockSwaggerEndpointItemsComponent { }
