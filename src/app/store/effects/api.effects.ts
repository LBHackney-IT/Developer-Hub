import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { Store, select, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GetApi, EApiActions, GetApiList, GetApiSuccess, GetApiListSuccess } from '../actions/api.actions';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import { selectApiList } from '../selectors/api.selectors';
import { IApi } from 'src/app/interfaces/IApi';
import { ApiService } from '../../services/api.service';

@Injectable()
export class ApiEffects {

    constructor(
        private actions$: Actions,
        private store$: Store<IAppState>,
        private apiService: ApiService
    ) {}

    // @Effect()
    // getApi$ =
    // this.actions$.pipe(
    //     ofType<GetApi>(EApiActions.GetApi),
    //     map(action => action.payload),
    //     withLatestFrom(this.store$.pipe(select(selectApiList))),
    //     switchMap(([id: string,apis: IApi[]]) => {
    //         const api: IApi = apis.find((item) => {
    //             return item.id = id;
    //         });

    //         return of(new GetApiSuccess(api));
    //     })
    //     );

    @Effect()
    getApiList$ =
    this.actions$.pipe(
        ofType<GetApiList>(EApiActions.GetApiList),
        switchMap(() => this.apiService.getListOfApis()),
        switchMap((response) => of( new GetApiListSuccess(response)))
    );
}
