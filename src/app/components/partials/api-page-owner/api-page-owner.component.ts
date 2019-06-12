import { Component, OnInit, Input } from '@angular/core';
import { IOwner } from 'src/app/interfaces/IOwner';

@Component({
  selector: 'app-api-page-owner',
  templateUrl: './api-page-owner.component.html',
  styleUrls: ['./api-page-owner.component.scss']
})
export class ApiPageOwnerComponent implements OnInit {
  @Input() owner: IOwner;
  private ownerTypes: string[];
  constructor() { }

  ngOnInit() {
    this.ownerTypes = Object.keys(this.owner);
  }

  toTitleCase = (text: string) => {
    return text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase();
  }
}
