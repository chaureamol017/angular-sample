import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-raised-row',
  templateUrl: './raised-row.component.html',
  styleUrls: ['./raised-row.component.scss']
})
export class RaisedRowComponent implements OnInit {
  @Input() buttons: string[] = [];
  @Output() switch: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(action) {
    this.switch.emit(action);
  }
}
