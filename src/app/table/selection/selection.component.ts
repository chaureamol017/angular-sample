import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Selection} from '../../models/selection';
import {FilterService} from '../../service/filter.service';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SelectionComponent implements OnInit {
    searchInput: string = '';

    availableToBeSelected: any[] = [];
    attribute: string[];
    selectedItems: any[] = [];

    private _data: Selection<any>;
    @Output() selectedEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() iconSelectionEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private filterService: FilterService
        ) {
    }

    ngOnInit(): void {
    }

    get data(): Selection<any> {
        return this._data;
    }

    @Input()
    set data(value: Selection<any>) {
        this._data = value;
        this._data.icon = value.icon;

        this.attribute = this._data.attribute;
        this.availableToBeSelected = this._data.available;
        this.selectedItems = this._data.selected;
    }

    onSearchKeyUp($event) {
        this.searchInput = $event;
    }

    toggleSelection(event): void {
        const index = this.selectedItems.indexOf(event);
        if (index === -1) {
            this.selectedItems.push(event);
        } else {
            this.selectedItems.splice(index, 1);
        }
        this.emitSelectedEvent();
    }

    onSelectionChange(event): void {
        this.selectedItems = event;
        this.emitSelectedEvent();
    }

    private emitSelectedEvent() {
        this.selectedEvent.emit(this.selectedItems);
    }

    removeSelected(option: any): void {
        const index = this.selectedItems.indexOf(option);;
        this.selectedItems.splice(index, 1);
        this.emitSelectedEvent();
    }

    isSelected(option: any): boolean {
        const index = this.selectedItems.indexOf(option);
        return index > -1;
    }

    selectAllFiltered(): void {
        this.onSelectionChange(this.availableFiltered);
    }

    removeAllFilteredSelected(): void {
        this.onSelectionChange([]);
    }

    get availableFiltered(): any[] {
        return this.filterService.filterByKeys(this.availableToBeSelected, this.attribute, this.searchInput);
    }

    get selectedFiltered(): any[] {
        return this.filterService.filterByKeys(this.selectedItems, this.attribute, this.searchInput);
    }

    onClickOptionIcon(option, event): void {
        event.stopImmediatePropagation();
        console.log(option);
        this.iconSelectionEvent.emit(option);
    }
}
