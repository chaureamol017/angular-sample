import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// A row with header at left and tow buttons on right
// Can be used at top/bottom of any form to show Form Name / Note with an action button as text

@Component({
  selector: 'app-row-details',
  templateUrl: './row-details.component.html',
  styleUrls: ['./row-details.component.scss']
})
export class RowDetailsComponent implements OnInit {
  @Output() click: EventEmitter<void> = new EventEmitter();
  @Input() header: string = 'Add';
  @Input() action: string = 'Cancel';
  @Input() disabled: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onclick() {
    this.click.emit();
  }
}
