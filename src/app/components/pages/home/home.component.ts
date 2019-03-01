import { Component, OnInit } from '@angular/core';

/**
 *
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   *Creates an instance of HomeComponent.
   * @memberof HomeComponent
   */
  constructor() { }

  /**
   *
   *
   * @memberof HomeComponent
   */
  ngOnInit() {
  }

}

@Component({
  selector: 'app-home',
  template: ''
})
export class MockHomeComponent {}
