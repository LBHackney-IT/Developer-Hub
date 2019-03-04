import { Action } from '@ngrx/store';
import { IUser } from '../../interfaces/IUser';

export enum EUserActions {
    SetUser = 'SET_USER',
    RemoveUser = 'REMOVE_USER'
}

export class SetUser implements Action {
    public readonly type = EUserActions.SetUser;
    constructor(public payload: IUser) {}
}

export class RemoveUser implements Action {
    public readonly type = EUserActions.RemoveUser;
}


export type UserActions =  RemoveUser| SetUser;
