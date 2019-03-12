import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CognitoUser } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const currentUser: CognitoUser = this.authService.getCurrentUser();
      let isUserLoggedIn: boolean;
      this.authService.isUserLoggedIn().subscribe((response) => {
        console.log(1, response);
        isUserLoggedIn = response;
      });

      console.log(2, isUserLoggedIn);

      if (currentUser) {
        this.router.navigateByUrl('/');
        console.log('hello');
        return false;
      }

    return true;
  }
}
