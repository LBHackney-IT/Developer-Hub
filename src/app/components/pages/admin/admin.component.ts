import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from '../../../services/apiKey.service';
import { AuthService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';

/**
 *
 * @export
 * @class AdminComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  /**
   * @summary
   * @type {object[]}
   * @memberof AdminComponent
   */
  tokenObjects: object[];

  /**
   * @summary Creates an instance of AdminComponent.
   * @param {ApiKeyService} apiKeyService
   * @param {AuthService} authService
   * @param {AlertService} alertService
   * @memberof AdminComponent
   */
  constructor(
    private apiKeyService: ApiKeyService,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  /**
   *
   *
   * @memberof AdminComponent
   */
  ngOnInit() {
  }



}
