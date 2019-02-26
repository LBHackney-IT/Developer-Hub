import { IUserState, initialUserState } from './user.state';
import { IApiState, initialApiState } from './api.state';
import { ActionReducerMap } from '@ngrx/store';
import { apiReducer } from '../reducers/api.reducers';
import { userReducer } from '../reducers/user.reducer';
import { swaggerEndpointReducer } from '../reducers/swagger-endpoints.reducers';
import { initialSwaggerEndpointState, ISwaggerEndpointState } from './swagger-endpoints.state';
export interface IAppState {
    api: IApiState;
    user: IUserState;
    swaggerEndpoint: ISwaggerEndpointState;
}

export const appReducers: ActionReducerMap<IAppState, any> = {
    api: apiReducer,
    user: userReducer,
    swaggerEndpoint: swaggerEndpointReducer
};

export const initialAppState: IAppState = {
    api: initialApiState,
    user: initialUserState,
    swaggerEndpoint: initialSwaggerEndpointState
};

export const getInitialState = () => {
    return initialAppState;
};
