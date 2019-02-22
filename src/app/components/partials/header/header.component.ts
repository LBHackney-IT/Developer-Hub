import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { selectIsAuthenticated } from '../../../store/selectors/user.selectors';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { map } from 'rxjs/operators';


/**
 *
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   *
   *
   * @type {string}
   * @memberof HeaderComponent
   */
  public user: IUser = null;

  /**
   *Creates an instance of HeaderComponent.
   * @param {AuthService} authService
   * @memberof HeaderComponent
   */
  constructor(
    private authService: AuthService,
    private store: Store<IAppState>
  ) { }

  /**
   *
   *
   * @memberof HeaderComponent
   */
  ngOnInit() {
  }

  getUsername = (): string => {
    this.authService.getUserObject().subscribe(
      (response) => {
        this.user = response;
      });
    // }
    if (this.user) {
      return this.user.name;
    } else {
      return 'username';
    }
  }

  isAuthenticated = (): boolean => {
    if (this.user) {
      return this.user === null ? false : true;
    }
    return false;
  }

  isAdmin = (): boolean => {
    if (this.user) {
      return this.user !== null && this.user.roles.includes('Admin') ? true : false;
    }
    return false;
  }

}
