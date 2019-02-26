import { Action } from '@ngrx/store';
import { initialUserState, IUserState } from '../state/user.state';
import { EUserActions, UserActions } from '../actions/user.actions';
import { IUser } from '../../interfaces/IUser';

export const userReducer = (state = initialUserState, action: UserActions): IUserState => {
    switch (action.type) {
        case EUserActions.SetUser: {
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        }
        case EUserActions.RemoveUser: {
            return {
                ...state,
                user: null,
                isAuthenticated: false
            };
        }

        default:
            return state;
    }
};
