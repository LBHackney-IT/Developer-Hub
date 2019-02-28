import { IApi } from '../../interfaces/IApi';
import { ISwagger } from 'src/app/interfaces/ISwagger';
export interface IApiState {
    apis: IApi[];
}


export const initialApiState: IApiState = {
    apis: []
};
