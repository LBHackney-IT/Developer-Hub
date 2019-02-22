import { IApi } from '../../interfaces/IApi';
export interface IApiState {
    apis: IApi[];
}


export const initialApiState: IApiState = {
    apis: []
};
