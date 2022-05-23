import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-details-row',
  templateUrl: './form-details-row.component.html',
  styleUrls: ['./form-details-row.component.scss']
})
export class FormDetailsRowComponent implements OnInit {
  @Input() title = 'Create';
  @Input() disableCancel = false;
  @Input() disableSave = false;

  @Output() cancelClick: EventEmitter<void> = new EventEmitter();
  @Output() saveClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCancelClick() {
    this.cancelClick.emit();
  }

  onSaveClick() {
    this.saveClick.emit();
  }
}
