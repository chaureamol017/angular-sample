import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onclick() {
    this.click.emit();
  }
}
