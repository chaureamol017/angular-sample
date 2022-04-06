import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-selected-tiles',
  templateUrl: './selected-tiles.component.html',
  styleUrls: ['./selected-tiles.component.scss']
})
export class SelectedTilesComponent implements OnInit, OnChanges {
  @Output() onRemove: EventEmitter<any[]> = new EventEmitter<any>();
  @Output() selectionChange: EventEmitter<any[]> = new EventEmitter<any>();
  
  @Input() selected: any[] = [];
  @Input() attribute: string[] = [];

  filtered: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selected) {
      this.filtered = this.selected.slice();
    }
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
