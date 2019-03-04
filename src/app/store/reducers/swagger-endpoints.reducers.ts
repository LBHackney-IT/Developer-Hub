import { initialSwaggerEndpointState, ISwaggerEndpointState } from '../state/swagger-endpoints.state';
import { ESwaggerEndpointActions, SwaggerEndpointActions } from '../actions/swagger-endpoints.action';


export const swaggerEndpointReducer = (state = initialSwaggerEndpointState, action: SwaggerEndpointActions): ISwaggerEndpointState => {
    switch (action.type) {
        case ESwaggerEndpointActions.GetSwaggerEndpointListSuccess: {
            return  {
                ...state,
                swaggerEndpoints: action.payload
            };
        }
        case ESwaggerEndpointActions.GetSwaggerEndpointList: {
            return  {
                ...state
            };
        }
        default:
            return state;
    }
};
