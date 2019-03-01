import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-reveal',
  templateUrl: './click-reveal.component.html',
  styleUrls: ['./click-reveal.component.scss']
})
export class ClickRevealComponent implements OnInit {
  /**
   *
   *
   * @type {string}
   * @memberof ClickRevealComponent
   */
  @Input() apiKey: string;
  /**
   *
   *
   * @memberof ClickRevealComponent
   */
  showKey = false;
  constructor() { }

  /**
   *
   *
   * @memberof ClickRevealComponent
   */
  ngOnInit() {
  }

  /**
   *
   *
   * @memberof ClickRevealComponent
   */
  toggleDisplay = () => {
    this.showKey = !this.showKey;
  }

}

@Component({
  selector: 'app-click-reveal',
  template: ''
})
export class MockClickRevealComponent {
  @Input() apiKey: string;
}
