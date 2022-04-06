import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-selection-table',
  templateUrl: './selection-table.component.html',
  styleUrls: ['./selection-table.component.scss']
})
export class SelectionTableComponent implements OnInit {
  @Output() selectionChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() toggleSelection: EventEmitter<any> = new EventEmitter<any>();
  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  @Input() dataLists: any[] = [];
  @Input() selected: any[] = [];
  @Input() icon: string = '';
  @Input() attribute: string[] = [];
  
  @ViewChild('selectionList') selectionListRef: MatSelectionList;

  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectionListRef.selectedOptions.select(...this.selected)
  }

  onIconClick(option, $event) {
    this.click.emit(option);
  }

  onToggleSelection(event): void {
    const value = {id: event.option.value.id, name: event.option.value.name}
    this.toggleSelection.emit(value);
    this.emitSelectedEvent();
  }

  isSelected(option: any): boolean {
    return !!this.find(option);
  }

  private find(option: any) {
    return this.selectionListRef.selectedOptions.selected.find(this.idNameComparator(option));
  }

  private idNameComparator(option: any): (value: any, index: number, obj: any[]) => unknown {
    return (s) => s.id === option.id && s.name === option.name;
  }

  private emitSelectedEvent() {
    const items: any[] = this.selectionListRef.selectedOptions.selected.map(e => e.value);
    this.selectionChange.emit(items);
  }

}
