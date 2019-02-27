import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() label: string;
  active: boolean;
  constructor() {
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-tab',
  template: ''
})
export class MockTabComponent {
}
