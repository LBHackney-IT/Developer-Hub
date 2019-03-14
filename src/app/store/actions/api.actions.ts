import { Action } from '@ngrx/store';
import { IApi } from '../../interfaces/IApi';

export enum EApiActions {
    GetApiList = 'GET_API_LIST',
    GetApiListSuccess = 'GET_API_LIST_SUCCESS',
    DeleteApi = 'DELETE_API',
    DeleteApiSuccess = 'DELETE_API_SUCCESS',
}

export class GetApiList implements Action {
    public readonly type = EApiActions.GetApiList;
}

export class GetApiListSuccess implements Action {
    public readonly type = EApiActions.GetApiListSuccess;
    constructor(public payload: IApi[]) {}
}

export class DeleteApi implements Action {
    public readonly type = EApiActions.DeleteApi;
    constructor(public payload: string) {}
}

export class DeleteApiSuccess implements Action {
    public readonly type = EApiActions.DeleteApiSuccess;
    constructor(public payload: string) {}
}

export type ApiActions =  DeleteApi | DeleteApiSuccess |GetApiList | GetApiListSuccess;
