import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearSearchInputComponent } from './clear-search-input.component';

describe('ClearSearchInputComponent', () => {
  let component: ClearSearchInputComponent;
  let fixture: ComponentFixture<ClearSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
