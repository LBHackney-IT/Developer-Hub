import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IApiState } from '../state/api.state';

const selectApi = (state: IAppState) => state.api;

export const selectApiList = createSelector(
    selectApi,
    (state: IApiState) => state.apis
);
