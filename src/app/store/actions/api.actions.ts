import { Action } from '@ngrx/store';
import { IApi } from '../../interfaces/IApi';

export enum EApiActions {
    GetApiList = 'GET_API_LIST',
    GetApiListSuccess = 'GET_API_LIST_SUCCESS',
    DeleteApi = 'DELETE_API',
    DeleteApiSuccess = 'DELETE_API_SUCCESS',
    AddApiSuccess = 'ADD_API_SUCCESS',
    AddApi = 'ADD_API',
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

export class AddApi implements Action {
    public readonly type = EApiActions.AddApi;
    constructor(public payload: IApi) {}
}

export class AddApiSuccess implements Action {
    public readonly type = EApiActions.AddApiSuccess;
    constructor(public payload: IApi) {}
}

export type ApiActions = AddApi | AddApiSuccess | DeleteApi | DeleteApiSuccess |GetApiList | GetApiListSuccess;
