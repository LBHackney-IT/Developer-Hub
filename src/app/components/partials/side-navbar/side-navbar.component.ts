import { Component, OnInit } from '@angular/core';

/**
 *
 *
 * @export
 * @class SideNavbarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  /**
   *Creates an instance of SideNavbarComponent.
   * @memberof SideNavbarComponent
   */
  constructor() { }

  /**
   *
   *
   * @memberof SideNavbarComponent
   */
  ngOnInit() {
  }

}


@Component({
  selector: 'app-side-navbar',
  template: ''
})
export class MockSideNavbarComponent {
}
