import { createSelector } from '@ngrx/store';
import { ISwaggerEndpointState } from '../state/swagger-endpoints.state';
import { IAppState } from '../state/app.state';

const selectSwaggerEndpointState = (state: IAppState) => state.swaggerEndpoint;

export const selectSwaggerEndpoints = createSelector(
    selectSwaggerEndpointState,
    (state: ISwaggerEndpointState) => state.swaggerEndpoints
);
