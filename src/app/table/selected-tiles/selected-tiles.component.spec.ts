import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTilesComponent } from './selected-tiles.component';

describe('SelectedTilesComponent', () => {
  let component: SelectedTilesComponent;
  let fixture: ComponentFixture<SelectedTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
