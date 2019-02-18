import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { AuthService } from '../services/auth.service';
import { IUser } from '../interfaces/IUser';

/**
 *
 *
 * @export
 * @class AdminGuard
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  /**
   *
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {(Observable<boolean> | Promise<boolean> | boolean)}
   * @memberof AdminGuard
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const currentUser: CognitoUser = this.authService.getCurrentUser();
      let isUserLoggedIn: boolean;
      let userInfo: IUser;
      this.authService.isUserLoggedIn().subscribe((response) => {
        isUserLoggedIn = response;
      });

      if (currentUser && isUserLoggedIn) {
        this.authService.getUserObject().subscribe((response) => {
          userInfo = response;
        });
        return userInfo.roles.includes('admin');
      }

      return false;

  }
}
