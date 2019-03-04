import { Component, OnInit } from '@angular/core';

/**
 *
 *
 * @export
 * @class PhaseBannerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-phase-banner',
  templateUrl: './phase-banner.component.html',
  styleUrls: ['./phase-banner.component.scss']
})
export class PhaseBannerComponent implements OnInit {

  /**
   *Creates an instance of PhaseBannerComponent.
   * @memberof PhaseBannerComponent
   */
  constructor() { }

  /**
   *
   *
   * @memberof PhaseBannerComponent
   */
  ngOnInit() {
  }

}

@Component({
  selector: 'app-phase-banner',
  template: ''
})
export class MockPhaseBannerComponent {
}
