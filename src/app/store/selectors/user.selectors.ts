import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IUserState } from '../state/user.state';


const selectUserState = (state: IAppState) => state.user;

export const selectUser = createSelector(
    selectUserState,
    (state: IUserState) => state.user
);

export const selectIsAuthenticated = createSelector(
    selectUserState,
    (state: IUserState) => state.isAuthenticated
);

