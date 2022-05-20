import { Component, OnInit } from '@angular/core';
import { MultiSelectData, StoreData } from 'src/app/models/data-model';

@Component({
  selector: 'app-forms-page',
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.scss']
})
export class FormsPageComponent implements OnInit {
  tabIndex: number = 0;
  buttons: string[] = ['Info Row', 'Drop Down', 'Clear Search']



// Drop Down
  options: StoreData[] = [];
  optionSelect: StoreData = null;
// Multi Select drop down
  customerDataSource: MultiSelectData[] = [];
  selectedCustomerData: MultiSelectData[] = [];
  customerSpinner: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setDropDownData();
  }

  onButtonClick(event) {
    this.tabIndex = event;
  }

// Drop Down operations
  onOptionSelect($event) {
      this.optionSelect = $event;
  }

  onCloseCustomer($event) {
    this.selectedCustomerData = $event;
  }

  private setDropDownData() {
    this.options.push({ id: 1, name: "M", selected: false });
    this.options.push({ id: 2, name: "N", selected: false });
    this.options.push({ id: 3, name: "O", selected: false });

    this.customerDataSource.push(new MultiSelectData(1, "A"));
    this.customerDataSource.push(new MultiSelectData(2, "B"));
    this.customerDataSource.push(new MultiSelectData(3, "C"));
  }
// --------------

// Clear Search
  onSearchKeyUp(event) {
    const input = event;
  }
// --------------
}
