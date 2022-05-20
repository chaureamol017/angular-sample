import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { SelectAutocompleteComponent } from './select-autocomplete.component';

describe('SelectAutocompleteComponent', () => {
  let component: SelectAutocompleteComponent;
  let fixture: ComponentFixture<SelectAutocompleteComponent>;
  const dataSource: any[] = [{id: 1, name: '2020 New Chevy'}, {id: 1, name: 'Cadillac'}];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
      ],
      declarations: [ SelectAutocompleteComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAutocompleteComponent);
    component = fixture.componentInstance;
    component.options = dataSource;
    component.placeHolder = 'Test Select';
    component.onOptionSelect = () => {};
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check filter with undefined', () => {
    const filterQuery = undefined;
    component.filterData(filterQuery);

    const result: any[] = component.filteredOptions;
    expect(result.length).toBe(2);
  });

  it('should filter with query', () => {
    const filterQuery = 'Cadillac';
    component.filterData(filterQuery);

    const result: any[] = component.filteredOptions;
    expect(result.length).toBe(1);
    expect(result[0].name).toBe(filterQuery);
  });

  it('displayFn should return name with datasource', () => {
    const emptySelectionData: any = null;
    const resultForNoSelection: string = component.displayFn(emptySelectionData);
    expect(resultForNoSelection).toBe('');

    const result: string = component.displayFn(dataSource[0]);
    expect(result).toBe(dataSource[0].name);
  });

  it('should clear selections on load', () => {
    component.filteredOptions = [dataSource[1]];
    component.resetFilteredOptionsToAll();

    expect(component.selectAutoCompleteFormControl.value).toBe('');
    expect(component.filteredOptions.length).toBe(2);
  });

  it('should clear selections', () => {
    component.resetSelection();
    expect(component.selectAutoCompleteFormControl.value).toBe('');
    expect(component.filteredOptions.length).toBe(2);
  });

});
