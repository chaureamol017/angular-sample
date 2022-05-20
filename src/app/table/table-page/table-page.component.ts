import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/data/table-data';
import { StoreData } from 'src/app/models/data-model';
import {Selection} from '../../models/selection';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  // Raised row
  buttons: string[] = ['TABLE', 'SELECTION', 'REMOVAL', 'Section']
  tableIndex: number = -1;
  
  // Table
  headers: string[] = ['Position', 'Name', 'Weight', 'Symbol'];
  columns: string[] = ['position', 'name', 'weight', 'symbol'];
  icons: string[] = ['edit', 'delete'];
  tableDataList = TableData.getTableRows();

  // Selection Tabele
  dataLists: any[] = [];
  selected: any[] = [];
  attribute: string[] = ['id', 'name'];


// Selection table and tile
selection: Selection<StoreData>;

  ngOnInit(): void {
    this.createSelectionTabeleData();
    this.createSelectionTabeleAndTilesData();
  }

  onButtonClick(index: number) {
    this.tableIndex = index;
  }

  private createSelectionTabeleData() {
    // Selection Tabele
    this.selected.push({ id: 111, name: 'ABC' });
    this.dataLists.push({ id: 111, name: 'ABC' });
    this.dataLists.push({ id: 113, name: 'DEF' });
  }

  private createSelectionTabeleAndTilesData() {
    // Selection table and tile
    this.selection = {
      available: [{ id: 111, name: 'ABC', selected: false }, { id: 113, name: 'DEF', selected: false }],
      selected: [{ id: 111, name: 'ABC', selected: false }],
      removed: [],
      // operation?: OPERATION.APPLY,
      attribute: ['id', 'name'],
    };
  }

}
