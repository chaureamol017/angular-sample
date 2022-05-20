import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicElement, TableData } from '../../data/table-data';

export interface IconClickData {
  iconName: string,
  data: any
}

@Component({
  selector: 'app-paginator-table',
  templateUrl: './paginator-table.component.html',
  styleUrls: ['./paginator-table.component.scss']
})

export class PaginatorTableComponent implements OnInit {
  @Input() headers: string[] = [];
  @Input() columns: string[] = [];
  @Input() icons: string[] = [];
  @Input() rows: any[] = [];

  @Output() iconClick: EventEmitter<IconClickData> = new EventEmitter();

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.updateDataSource();
  }

  get displayedColumns(): string[] {
    const columnsToView: string[] = this.columns.slice();
    if (this.icons && this.icons.length > 0) {
      columnsToView.push('icon');
    }
    return columnsToView;
  }

  set displayedColumns(columnNameArr: string[]) {
  }

  onIconClick(element, icon) {
    this.iconClick.emit({iconName: icon, data: element})
  }

  private updateDataSource() {
    this.dataSource = new MatTableDataSource<any>(this.rows);
    this.dataSource.paginator = this.paginator;
  }

}

