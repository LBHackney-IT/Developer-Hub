import { initialApiState, IApiState } from '../state/api.state';
import { EApiActions, ApiActions, DeleteApi, DeleteApiSuccess } from '../actions/api.actions';
import { IApi } from '../../interfaces/IApi';

export const apiReducer = (state = initialApiState, action: ApiActions): IApiState => {
    switch (action.type) {
        case EApiActions.GetApiListSuccess: {
            return  {
                ...state,
                apis: action.payload
            };
        }
        case EApiActions.DeleteApiSuccess: {
            let apis: IApi[] = [...state.apis];
            apis = apis.filter((api) => {
                return api.id !== action.payload;
            });
            return  {
                ...state,
                apis: apis
            };
        }
        default:
            return state;
    }
};
