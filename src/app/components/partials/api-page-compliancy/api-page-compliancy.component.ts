import { Component, OnInit, Input } from '@angular/core';
import { ICompliancyObject } from '../../../interfaces/ICompliancyObject';
import { ICompiancy } from '../../../interfaces/ICompiancy';
import { compliancyConfigMap } from '../../../shared/config';
import { generateRandomApi } from '../../../../testing/mock-db';

@Component({
  selector: 'app-api-page-compliancy',
  templateUrl: './api-page-compliancy.component.html',
  styleUrls: ['./api-page-compliancy.component.scss']
})
export class ApiPageCompliancyComponent implements OnInit {
  @Input() compliance: ICompiancy;
  compliancyArray: ICompliancyObject[];
  constructor() { }

  ngOnInit() {
    this.compliancyArray = this.generateCompliancyText();
  }

  isCompliant = (): boolean => {
    return this.compliancyArray.filter(compliancyObject => compliancyObject.compliant = false).length > 0;
  }

  generateCompliancyText = (): ICompliancyObject[] => {
    const keys = Object.keys(this.compliance);
    return keys.map((id) => {
      return {
        id: id,
        text: compliancyConfigMap[id],
        compliant: this.compliance[id]
      };
    });

  }

}

@Component({
  selector: 'app-api-page-compliancy',
  template: ''
})
export class MockApiPageCompliancyComponent {
  @Input() compliance: ICompiancy = generateRandomApi().compliant;
}
