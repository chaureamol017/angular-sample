import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selected-tiles',
  templateUrl: './selected-tiles.component.html',
  styleUrls: ['./selected-tiles.component.scss']
})
export class SelectedTilesComponent implements OnInit {
  @Output() onRemove: EventEmitter<any[]> = new EventEmitter<any>();
  @Output() selectionChange: EventEmitter<any[]> = new EventEmitter<any>();
  
  @Input() selected: any[] = [];
  @Input() attribute: string[] = [];

  filtered: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.filtered = this.selected.slice();
  }

  get selectedFiltered(): any[] {
    return this.filtered;
  }

  removeSelected(option) {
    const index = this.filtered.indexOf(option);
    if (index > -1) {
      this.filtered.splice(index, 1);
    }

    this.emitSelectionEvent(option);
  }

  emitSelectionEvent(option) {
    this.onRemove.emit(option)
    this.selectionChange.emit(this.selected)
  }
}
