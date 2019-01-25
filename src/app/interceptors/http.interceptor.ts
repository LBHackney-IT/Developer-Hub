import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CognitoUser } from 'amazon-cognito-identity-js';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class LambdaInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        let authToken;
        const cognitoUser: CognitoUser = this.authService.getCurrentUser();
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
            .append('Content-Type', 'application/json')
        });

        // Get the auth token from the service.

        return next.handle(authReq);
  }
}
