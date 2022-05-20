import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRowRaisedComponent } from './button-row-raised.component';

describe('ButtonRowRaisedComponent', () => {
  let component: ButtonRowRaisedComponent;
  let fixture: ComponentFixture<ButtonRowRaisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRowRaisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRowRaisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
