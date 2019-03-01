import { Component, OnInit,   ContentChildren, QueryList, AfterContentInit, ViewChild, ComponentFactoryResolver,
  ViewContainerRef } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }

  }

  public selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((item) => {
      item.active = false;
    });
    tab.active = true;
  }

}


@Component({
  selector: 'app-tabs',
  template: ''
})
export class MockTabsComponent {
}
