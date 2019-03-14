import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { selectIsAuthenticated } from '../../../store/selectors/user.selectors';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   *
   *
   * type {string}
   * memberof HeaderComponent
   */
  public user: IUser = null;

  /**
   *Creates an instance of HeaderComponent.
   * param {AuthService} authService
   * memberof HeaderComponent
   */
  private dropDown = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  getUsername = (): string => {
    this.authService.getUserObject().subscribe(
      (response) => {
        this.user = response;
      });
    if (this.user && this.user.name) {
      return this.user.name;
    } else {
      return 'sign in';
    }
  }

  isAuthenticated = (): boolean => {
    if (this.user !== null) {
      return this.user === null ? false : true;
    }
    return false;
  }

  isAdmin = (): boolean => {
    if (this.user && this.user.roles) {
      return this.user !== null && this.user.roles.includes('Admin') ? true : false;
    }
    return false;
  }
}

@Component({
  selector: 'app-header',
  template: ''
})
export class MockHeaderComponent {
}
