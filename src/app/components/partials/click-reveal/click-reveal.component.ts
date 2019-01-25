import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-reveal',
  templateUrl: './click-reveal.component.html',
  styleUrls: ['./click-reveal.component.scss']
})
export class ClickRevealComponent implements OnInit {
  @Input() apiKey: string;
  showKey = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDisplay = () => {
    this.showKey = !this.showKey;
  }

}
