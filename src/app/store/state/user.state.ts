import { IUser } from '../../interfaces/IUser';


export interface IUserState {
    user: IUser;
    isAuthenticated: boolean;
}


export const initialUserState: IUserState = {
    user: null,
    isAuthenticated: false
};
