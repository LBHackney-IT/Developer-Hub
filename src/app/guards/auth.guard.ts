import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CognitoUser } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser: CognitoUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.authService.refreshSession(currentUser);
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
