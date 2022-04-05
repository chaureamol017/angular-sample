import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { StoreData } from '../../models/data-model';

@Component({
  selector: 'app-select-autocomplete',
  templateUrl: './select-autocomplete.component.html',
  styleUrls: ['./select-autocomplete.component.scss']
})
export class SelectAutocompleteComponent implements OnInit, OnChanges {
  @Output() selectCallback: EventEmitter<StoreData> = new EventEmitter();
  @Output() dataSourceCallback: EventEmitter<number> = new EventEmitter();

  @Input() options: StoreData[] = [];
  @Input() placeHolder = 'Select';
  @Input() showProgressSpinner: boolean = false;
  @Input() enableHint: boolean = false;

  selectAutoCompleteFormControl: FormControl = new FormControl();
  filteredOptions: StoreData[] = [];

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options && changes.options.previousValue !== changes.options.currentValue) {
      this.resetFilteredOptionsToAll();
      if (!changes.options.isFirstChange()) {
        this.selectCallback.emit(null);
      }
    }
  }

  initForm() {
    this.resetFilteredOptionsToAll();

    this.selectAutoCompleteFormControl.valueChanges.subscribe(response => this.filterData(response));
  }

  displayFn(selectedOption: any): string {
    return selectedOption && selectedOption.name ? selectedOption.name : '';
  }

  filterData(input: StoreData | string): void {
    if (!(input instanceof Object)) {
      this.filteredOptions = (input && input.toString().length) 
                                  ? this.options.filter(this.nameComaparator(input.toString())) 
                                  : this.options.slice();
    }
  }

  onOptionSelect(event: any) {
    this.selectCallback.emit(event.option.value);
  }

  onClickInputOrIcon() {
    this.dataSourceCallback.emit(this.options.length);
  }

  resetFilteredOptionsToAll() {
    this.filteredOptions = this.options.slice();
    this.resetSelection();
  }

  public resetSelection() {
    this.selectAutoCompleteFormControl.setValue('');
  }

  private nameComaparator(input: string): (data: StoreData, index: number, dataArr: StoreData[]) => unknown {
    return item => item.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
  }

}
