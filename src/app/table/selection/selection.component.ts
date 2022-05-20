import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import { ArrayComparatorPipe } from '../../pipe/array-comparator.pipe';
import { FilterArrayPipe } from '../../pipe/filter-array.pipe';
import {Selection} from '../../models/selection';
import { ArrayElementTogglerPipe } from 'src/app/pipe/array-element-toggler.pipe';

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
        private filterArrayPipe: FilterArrayPipe,
        private elementTogglerPipe: ArrayElementTogglerPipe,
        public changeDetector: ChangeDetectorRef,

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
        this.selectedItems = this.elementTogglerPipe.transform(this.selectedItems, event);
        this.emitSelectedEvent();
        this.changeDetector.detectChanges();
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

    selectAllFiltered(): void {
        this.onSelectionChange(this.availableFiltered);
    }

    removeAllFilteredSelected(): void {
        this.onSelectionChange([]);
    }

    get availableFiltered(): any[] {
        return this.filterArrayPipe.transform(this.availableToBeSelected, this.attribute, this.searchInput);
    }

    get selectedFiltered(): any[] {
        return this.filterArrayPipe.transform(this.selectedItems, this.attribute, this.searchInput);
    }

    onClickOptionIcon(option, event): void {
        event.stopImmediatePropagation();
        console.log(option);
        this.iconSelectionEvent.emit(option);
    }
}
