import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-row-raised',
  templateUrl: './button-row-raised.component.html',
  styleUrls: ['./button-row-raised.component.scss']
})
export class ButtonRowRaisedComponent implements OnInit {
  @Input() buttons: string[] = [];
  @Output() switch: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(action) {
    this.switch.emit(action);
  }
}
