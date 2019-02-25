import { ISwagger } from 'src/app/interfaces/ISwagger';
export interface ISwaggerEndpointState {
    swaggerEndpoints: ISwagger[];
}
export const initialSwaggerEndpointState: ISwaggerEndpointState = {
    swaggerEndpoints: []
};
