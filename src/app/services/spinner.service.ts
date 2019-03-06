import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private subject: Subject<boolean> =  new Subject<boolean>();
  constructor() {
  }

  displaySpinner = () => {
    this.subject.next(true);
  }

  hideSpinner = () => {
    this.subject.next(false);
  }

  getSpinner(): Observable<any> {
    return this.subject.asObservable();
  }
}
