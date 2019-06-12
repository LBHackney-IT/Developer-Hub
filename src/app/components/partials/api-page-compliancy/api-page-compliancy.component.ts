import { Component, OnInit, Input } from '@angular/core';
import { ICompliancyObject } from '../../../interfaces/ICompliancyObject';

@Component({
  selector: 'app-api-page-compliancy',
  templateUrl: './api-page-compliancy.component.html',
  styleUrls: ['./api-page-compliancy.component.scss']
})
export class ApiPageCompliancyComponent implements OnInit {
  @Input() compliancyArray: ICompliancyObject[];
  constructor() { }

  ngOnInit() {
  }

  isCompliant = (): boolean => {
    return this.compliancyArray.filter(compliancyObject => compliancyObject.compliant = false).length > 0;
  }

}
