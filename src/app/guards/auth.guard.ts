import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CognitoUser } from 'amazon-cognito-identity-js';

/**
 *
 *
 * @export
 * @class AuthGuard
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *Creates an instance of AuthGuard.
   * @param {AuthService} authService
   * @param {Router} router
   * @memberof AuthGuard
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  /**
   *
   *
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {(Observable<boolean> | Promise<boolean> | boolean)}
   * @memberof AuthGuard
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser: CognitoUser = this.authService.getCurrentUser();
    let isUserLoggedIn: boolean;
    this.authService.isUserLoggedIn().subscribe((response) => {
      isUserLoggedIn = response;
    });
    if (currentUser && isUserLoggedIn) {
      this.authService.refreshSession(currentUser);
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
