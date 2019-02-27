import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-layout',
  templateUrl: './column-layout.component.html',
  styleUrls: ['./column-layout.component.scss']
})
export class ColumnLayoutComponent implements OnInit {
  @Input() show: boolean;
  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'app-column-layout',
  template: ''
})
export class MockColumnLayoutComponent {
  @Input() show: boolean;
}
