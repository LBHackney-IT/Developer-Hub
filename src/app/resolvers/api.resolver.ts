import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectApi, selectApiList } from '../store/selectors/api.selectors';
import { IApi } from '../interfaces/IApi';
import { GetApiList } from '../store/actions/api.actions';

@Injectable()
export class APIResolver implements Resolve<any> {
    constructor(private route: ActivatedRoute, private store: Store<IAppState>) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.params.id;
        this.store.pipe(select(selectApi(id))).subscribe(
            (response: IApi) => {
                const api: IApi = response;
                if (!api) {
                    this.store.dispatch(new GetApiList());
                }
            }, (error) => {
                this.store.dispatch(new GetApiList());
            });
        return id;
    }
}
