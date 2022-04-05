import { Component, OnInit } from '@angular/core';
import { StoreData, MultiSelectData } from 'src/app/models/data-model';


@Component({
  selector: 'app-drop-down-page',
  templateUrl: './drop-down-page.component.html',
  styleUrls: ['./drop-down-page.component.scss']
})
export class DropDownPageComponent implements OnInit {

  options: StoreData[] = [];
  optionSelect: StoreData = null;

  customerDataSource: MultiSelectData[] = [];
  selectedCustomerData: MultiSelectData[] = [];
  customerSpinner: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.options.push({id: 1, name: "M", selected: false});
    this.options.push({id: 2, name: "N", selected: false});
    this.options.push({id: 3, name: "O", selected: false});

    this.customerDataSource.push(new MultiSelectData(1, "A"));
    this.customerDataSource.push(new MultiSelectData(2, "B"));
    this.customerDataSource.push(new MultiSelectData(3, "C"));

  }

  onOptionSelect($event) {
      this.optionSelect = $event;
  }


  onCloseCustomer($event) {
    this.selectedCustomerData = $event;
  }
}
