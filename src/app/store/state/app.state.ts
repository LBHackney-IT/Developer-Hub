import { IUserState, initialUserState } from './user.state';
import { IApiState, initialApiState } from './api.state';
import { ActionReducerMap } from '@ngrx/store';
import { apiReducer } from '../reducers/api.reducers';
import { userReducer } from '../reducers/user.reducer';
export interface IAppState {
    api: IApiState;
    user: IUserState;
}

export const appReducers: ActionReducerMap<IAppState, any> = {
    api: apiReducer,
    user: userReducer
};

export const initialAppState: IAppState = {
    api: initialApiState,
    user: initialUserState
};

export const getInitialState = () => {
    return initialAppState;
};
