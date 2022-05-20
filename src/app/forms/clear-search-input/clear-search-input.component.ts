import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-clear-search-input',
  templateUrl: './clear-search-input.component.html',
  styleUrls: ['./clear-search-input.component.scss']
})
export class ClearSearchInputComponent implements OnInit {
  @Input() showSearchIcon: boolean = true;
  @Output() onKeyUp: EventEmitter<string>  = new EventEmitter<string>();
  showClearIcon: boolean = false;
  isChangedFromClear: boolean = false;

  formControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe(input => this.onInputChange(input))
  }

  onInputChange(input: string): void {
    this.showClearIcon = (input && input.length > 0)

    if (this.isChangedFromClear) {
      this.isChangedFromClear = false;
    } else {
      this.emitValue();
    }
  }

  onClickClearSearchValue(): void {
    this.isChangedFromClear = true;
    this.formControl.setValue('');
    this.emitValue();
  }

  emitValue() {
    this.onKeyUp.emit(this.formControl.value);
  }

}
