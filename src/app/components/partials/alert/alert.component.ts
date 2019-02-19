import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../services/alert.service';

/**
 *
 *
 * @export
 * @class AlertComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;
  constructor(private alertService: AlertService) { }

  /**
   *
   *
   * @memberof AlertComponent
   */
  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message => { 
        this.message = message;
    });

    setTimeout(() => {
      this.remove();
    }, 10000);
  }

  /**
   *
   *
   * @memberof AlertComponent
   */
  remove = () => {
    this.message = null;
    this.subscription.unsubscribe();
  }

  /**
   *
   *
   * @memberof AlertComponent
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
