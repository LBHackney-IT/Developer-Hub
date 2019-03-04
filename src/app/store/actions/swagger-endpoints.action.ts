import { Action } from '@ngrx/store';
import { ISwagger } from '../../interfaces/ISwagger';

export enum ESwaggerEndpointActions {
    GetSwaggerEndpointList = 'GET_SWAGGER_ENDPOINT_LIST',
    GetSwaggerEndpointListSuccess = 'GET_SWAGGER_ENDPOINT_LIST_SUCCESS',
}

export class GetSwaggerEndpointList implements Action {
    public readonly type = ESwaggerEndpointActions.GetSwaggerEndpointList;
}

export class GetSwaggerEndpointListSuccess implements Action {
    public readonly type = ESwaggerEndpointActions.GetSwaggerEndpointListSuccess;
    constructor(public payload: ISwagger[]) {}
}

export type SwaggerEndpointActions = GetSwaggerEndpointList | GetSwaggerEndpointListSuccess;
