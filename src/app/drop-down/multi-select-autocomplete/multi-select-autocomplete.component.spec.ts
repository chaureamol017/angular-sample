import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSelectData } from 'src/app/models/data-model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MultiSelectAutocompleteComponent } from './multi-select-autocomplete.component';

describe('MultiSelectAutocompleteComponent', () => {
  let component: MultiSelectAutocompleteComponent;
  let fixture: ComponentFixture<MultiSelectAutocompleteComponent>;
  const dataSource: MultiSelectData[] = [new MultiSelectData(1, '2020 New Chevy'), new MultiSelectData(2, 'Cadillac')];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [MultiSelectAutocompleteComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectAutocompleteComponent);
    component = fixture.componentInstance;
    component.placeHolder = '';
    component.options = dataSource;
    component.onClosedEvent = () => { };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should check filter with undefined', () => {
    const filterQuery = undefined;
    component.filterData(filterQuery);
    expect(component.filteredOptions.length).toBe(2);
  });

});
