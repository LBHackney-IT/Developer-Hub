import { Injectable } from '@angular/core';
import { of} from 'rxjs';
import { Store,  } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import { SwaggerEndpointService } from 'src/app/services/swagger-endpoint.service';
import { GetSwaggerEndpointList, ESwaggerEndpointActions, GetSwaggerEndpointListSuccess } from '../actions/swagger-endpoints.action';
import { ISwagger } from '../../interfaces/ISwagger';


@Injectable()
export class SwaggerEndpointsEffects {

    constructor(
        private actions$: Actions,
        private store$: Store<IAppState>,
        private swaggerEndpointService: SwaggerEndpointService
    ) {}

    @Effect()
    getSwaggerEndpointList$ =
    this.actions$.pipe(
        ofType<GetSwaggerEndpointList>(ESwaggerEndpointActions.GetSwaggerEndpointList),
        switchMap(() => this.swaggerEndpointService.getListOfSwaggerEndpoints()),
        switchMap((response: ISwagger[]) => of( new GetSwaggerEndpointListSuccess(response)))
    );
}
