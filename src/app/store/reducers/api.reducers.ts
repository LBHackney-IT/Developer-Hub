import { initialApiState, IApiState } from '../state/api.state';
import { EApiActions, ApiActions, GetApiList, GetApiListSuccess } from '../actions/api.actions';

export const apiReducer = (state = initialApiState, action: ApiActions): IApiState => {
    switch (action.type) {
        case EApiActions.GetApiListSuccess: {
            return  {
                ...state,
                apis: action.payload
            };
        }
        case EApiActions.GetApiSuccess: {
            return  {
                ...state
            };
        }
        default:
            return state;
    }
};
