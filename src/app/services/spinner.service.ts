import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private subject: Subject<any> =  new Subject<any>();
  constructor() {
  }

  displaySpinner = () => {
    this.subject.next({display: true});
  }

  hideSpinner = () => {
    console.log('hide');
    this.subject.next({display: false});
  }

  getSpinner(): Observable<any> {
    return this.subject.asObservable();
  }
}
