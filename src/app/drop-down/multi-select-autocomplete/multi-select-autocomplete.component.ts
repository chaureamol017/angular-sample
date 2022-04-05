import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges  } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MultiSelectData } from 'src/app/models/data-model';



@Component({
  selector: 'app-multi-select-autocomplete',
  templateUrl: './multi-select-autocomplete.component.html',
  styleUrls: ['./multi-select-autocomplete.component.scss']
})
export class MultiSelectAutocompleteComponent implements OnInit, OnChanges {
  @Output() callbackResult: EventEmitter<any> = new EventEmitter();
  @Output() dataSourceCallback: EventEmitter<number> = new EventEmitter();

  @Input() options: MultiSelectData[] = [];
  @Input() placeHolder = 'Select';
  @Input() showProgressSpinner = false;
  @Input() enableHint = false;

  selectFormControl: FormControl = new FormControl();
  filteredOptions: MultiSelectData[] = new Array<MultiSelectData>();
  selectedOptions: MultiSelectData[] = new Array<MultiSelectData>();

  ngOnInit() {
    this.resetFilteredOptionsToAll();
    this.selectFormControl.valueChanges.subscribe(input => this.filterData(input));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options && changes.options.previousValue !== changes.options.currentValue) {
      this.resetFilteredOptionsToAll();
    }
  }

  filterData(input: Array<MultiSelectData> | string) {
    if (!(input instanceof Array)) {
      this.filteredOptions = (input && input.toString().length) 
                                  ? this.options.filter(this.nameComaparator(input.toString())) 
                                  : this.options.slice();
    }
    
  }

  displayFn(values: MultiSelectData[] | string): string | undefined {
    const displayValue = (Array.isArray(values)) ? values.map(x => x.name).join(",") : values;

    return displayValue;
  }

  optionClicked(event: Event, selectedData: MultiSelectData) {
    event.stopPropagation();
    this.toggleSelection(selectedData);
  }

  onCompleteSelection(event: Event) {
    this.emitSelection();
  }

  toggleSelection(selectedData: MultiSelectData) {
    selectedData.selected = !selectedData.selected;
    if (selectedData.selected) {
      this.selectedOptions.push(selectedData);
    } else {
      const i = this.selectedOptions.findIndex(value => value.name === selectedData.name);
      this.selectedOptions.splice(i, 1);
    }
    this.selectFormControl.setValue(this.selectedOptions);
  }


  resetFilteredOptionsToAll() {
    this.filteredOptions = this.options.slice();
    this.resetSelection();
  }

  public setOptions(previousOptions: MultiSelectData[]) {
    this.resetSelection();

    previousOptions.forEach(option => {
      const index = this.options.findIndex(this.idAndNameComparator(option))
      if (index > -1) {
        const selected: MultiSelectData = this.options[index];
        this.toggleSelection(selected);
      }
    });

    this.emitSelection();
  }

  public resetSelection() {
    this.options.forEach(option => option.selected = false);
    this.selectedOptions = [];
    this.selectFormControl.setValue('');

    this.emitSelection();
  }

  onClosedEvent(event: Event) {
    this.callbackResult.emit(this.selectedOptions);
  }

  onClickInputOrIcon() {
    this.dataSourceCallback.emit(this.options.length);
  }

  private emitSelection() {
    this.callbackResult.emit([]);
  }

  private nameComaparator(input: string): (data: MultiSelectData, index: number, dataArr: MultiSelectData[]) => unknown {
    return option => option.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
  }

  private idAndNameComparator(data: MultiSelectData): (value: MultiSelectData, index: number, obj: MultiSelectData[]) => unknown {
    return value => data.id === value.id && data.name === value.name;
  }

}

