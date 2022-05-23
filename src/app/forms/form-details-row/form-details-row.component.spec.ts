import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailsRowComponent } from './form-details-row.component';

describe('FormDetailsRowComponent', () => {
  let component: FormDetailsRowComponent;
  let fixture: ComponentFixture<FormDetailsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDetailsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
