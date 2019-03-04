import { Action } from '@ngrx/store';
import { IApi } from '../../interfaces/IApi';

export enum EApiActions {
    GetApi = 'GET_API',
    GetApiSuccess = 'GET_API_SUCCESS',
    GetApiList = 'GET_API_LIST',
    GetApiListSuccess = 'GET_API_LIST_SUCCESS'
}

export class GetApi implements Action {
    public readonly type = EApiActions.GetApi;
    constructor(public payload: string) {}
}

export class GetApiSuccess implements Action {
    public readonly type = EApiActions.GetApiSuccess;
    constructor(public payload: IApi) {}
}

export class GetApiList implements Action {
    public readonly type = EApiActions.GetApiList;
}

export class GetApiListSuccess implements Action {
    public readonly type = EApiActions.GetApiListSuccess;
    constructor(public payload: IApi[]) {}
}

export type ApiActions = GetApi | GetApiSuccess | GetApiList | GetApiListSuccess;
