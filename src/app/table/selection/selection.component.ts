import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
// import {SearchPipe} from '../../models/search-pipe';
import {Selection} from '../../models/selection';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SelectionComponent implements OnInit {
    searchInput: string = '';

    availableToBeSelected: any[] = [];
    selectionModel: SelectionModel<any>;
    attribute: string[];

    // @ViewChild('availableSelectionSearch') searchInputRef: ElementRef;

    private _data: Selection<any>;
    @Output() selectedEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() iconSelectionEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        // private filterPipe: SearchPipe
        ) {
    }

    ngOnInit(): void {
    }

    get data(): Selection<any> {
        return this._data;
    }

    onSearchKeyUp($event) {
        this.searchInput = $event;
    }

    @Input()
    set data(value: Selection<any>) {
        this._data = value;
        this._data.icon = value.icon;
        this.attribute = this._data.attribute;
        this.availableToBeSelected = this._data.available;

        this.selectionModel = new SelectionModel<any>(true, this._data.selected);
    }

    toggleSelection(event): void {
        if (!this.isSelected(event.option.value)) {
            this.selectionModel.select(event.option.value);
        } else {
            const found = this.find(event.option.value);
            this.selectionModel.deselect(found);
        }
        this.emitSelectedEvent();
    }

    private emitSelectedEvent() {
        this.selectedEvent.emit(this.selectionModel.selected);
    }

    removeSelected(option: any): void {
        const found = this.find(option);
        this.selectionModel.deselect(found);
        this.emitSelectedEvent();
    }

    isSelected(option: any): boolean {
        return !!this.find(option);
    }

    private find(option: any) {
        return this.selectionModel.selected.find((s) => JSON.stringify(s) === JSON.stringify(option));
    }

    selectAllFiltered(): void {
        this.availableFiltered.filter((f) => !this.isSelected(f));
        this.selectionModel.select(...this.availableFiltered.filter((f) => !this.isSelected(f)));
        this.emitSelectedEvent();
    }

    removeAllFilteredSelected(): void {
        this.selectionModel.deselect(...this.selectedFiltered);
        this.emitSelectedEvent();
    }

    get availableFiltered(): any[] {
        // return this.filterPipe.transform(this.availableToBeSelected, this.attribute, this.searchInputRef.nativeElement.value);
        return [];
    }

    get selectedFiltered(): any[] {
        // return this.filterPipe.transform(this.selectionModel.selected, this.attribute, this.searchInputRef.nativeElement.value);
        return [];
    }

    onClickOptionIcon(option, event): void {
        event.stopImmediatePropagation();
        console.log(option);
        this.iconSelectionEvent.emit(option);
    }
}
