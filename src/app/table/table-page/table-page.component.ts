import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/models/data-model';
import {Selection} from '../../models/selection';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  tableIndex: number = -1;
  selection: Selection<StoreData>;

  // Raised row
  buttons: string[] = ['TABLE', 'SELECTION', 'REMOVAL', 'Section']
  // ---

  // Selection Tabele
  dataLists: any[] = [];
  selected: any[] = [];
  attribute: string[] = ['id', 'name'];
// --

  ngOnInit(): void {
    // Selection Tabele
    this.selected.push({id: 111, name: 'ABC'});
    this.dataLists.push({id: 111, name: 'ABC'});
    this.dataLists.push({id: 113, name: 'DEF'});
    // --

    this.selection = {

      available: [{id: 111, name: 'ABC', selected: false}, {id: 113, name: 'DEF', selected: false}],
      selected: [],
      removed: [],
      // operation?: OPERATION.APPLY,
      attribute: ['id', 'name'],
      // title?: string;
      // config?: SelectionConfig;
      // icon?: string;
      // selectedIcon?: any;
    }
  }

  switchTable(index: number) {
    this.tableIndex = index;
  }

  onButtonClick(index: number) {
    this.tableIndex = index;
  }
}
