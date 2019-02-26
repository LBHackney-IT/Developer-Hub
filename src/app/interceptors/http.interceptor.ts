import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CognitoUser } from 'amazon-cognito-identity-js';

/** Pass untouched request through to the next request handler. */
/**
 *
 *
 * @export
 * @class LambdaInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class LambdaInterceptor implements HttpInterceptor {

    /**
     *Creates an instance of LambdaInterceptor.
     * @param {AuthService} authService
     * @memberof LambdaInterceptor
     */
    constructor(private authService: AuthService) {}

    /**
     *
     *
     * @param {HttpRequest<any>} req
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     * @memberof LambdaInterceptor
     */
    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        let authToken;
        let isUserLoggedIn: boolean;
        this.authService.isUserLoggedIn().subscribe((response) => {
            isUserLoggedIn = response;
        });
        const cognitoUser: CognitoUser = this.authService.getCurrentUser();
        if (isUserLoggedIn && cognitoUser) {
            cognitoUser.getSession((err, session) => {
                if (err) {
                    return;
                }
                authToken = session.getIdToken().jwtToken;
            });
            const authReq = req.clone({
                headers: req.headers
                .set('Authorization', authToken)
                // .append('Access-Control-Allow-Origin', '*')
                // .append('Content-Type', 'application/json')
            });
            // Get the auth token from the service.
            return next.handle(authReq);
        }
        return next.handle(req);
  }
}
