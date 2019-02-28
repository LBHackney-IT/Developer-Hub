import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject, Observable } from 'rxjs';

/**
 *
 *
 * @export
 * @class AlertService
 */
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          if (this.keepAfterNavigationChange) {
              // only keep for a single location change
              this.keepAfterNavigationChange = !this.keepAfterNavigationChange;
          } else {
              // clear alert
              this.subject.next();
          }
      }
  });
  }


  /**
   *
   *
   * @param {string} message
   * @param {boolean} [keepAfterNavigationChange=false]
   * @memberof AlertService
   */
  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }


  /**
   *
   *
   * @param {string} message
   * @param {boolean} [keepAfterNavigationChange=false]
   * @memberof AlertService
   */
  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }


  /**
   *
   *
   * @returns {Observable<any>}
   * @memberof AlertService
   */
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
