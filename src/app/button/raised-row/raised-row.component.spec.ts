import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisedRowComponent } from './raised-row.component';

describe('RaisedRowComponent', () => {
  let component: RaisedRowComponent;
  let fixture: ComponentFixture<RaisedRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaisedRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisedRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
