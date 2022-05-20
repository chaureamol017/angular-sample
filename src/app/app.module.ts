import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SelectionComponent } from './table/selection/selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

import { ArrayComparatorPipe } from './pipe/array-comparator.pipe';
import { ArrayElementTogglerPipe } from './pipe/array-element-toggler.pipe';
import { FilterArrayPipe } from './pipe/filter-array.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { HighlightPipe } from './pipe/highlight.pipe';
import { HighlightSearchPipe } from './pipe/highlight-search.pipe';

import { DropDownPageComponent } from './drop-down/drop-down-page/drop-down-page.component';
import { TablePageComponent } from './table/table-page/table-page.component';
import { DialogPageComponent } from './dialog/dialog-page/dialog-page.component';
import { NotificationPageComponent } from './notification/notification-page/notification-page.component';
import { SelectionTableComponent } from './table/selection-table/selection-table.component';

import { ClearSearchInputComponent } from './forms/clear-search-input/clear-search-input.component';
import { FormsPageComponent } from './forms/forms-page/forms-page.component';
import { MultiSelectAutocompleteComponent } from './forms/multi-select-autocomplete/multi-select-autocomplete.component';
import { ButtonRowRaisedComponent } from './forms/button-row-raised/button-row-raised.component';
import { RowDetailsComponent } from './forms/row-details/row-details.component';
import { SelectAutocompleteComponent } from './forms/select-autocomplete/select-autocomplete.component';

import { SelectedTilesComponent } from './table/selected-tiles/selected-tiles.component';
import { NotificationPopupComponent } from './notification/notification-popup/notification-popup.component';
import { FlashNotificationComponent } from './notification/flash-notification/flash-notification.component';
import { PaginatorTableComponent } from './table/paginator-table/paginator-table.component';
import { StringFormatterPipe } from './pipe/string-formatter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SelectionComponent,
    DropDownPageComponent,

    TablePageComponent,
    DialogPageComponent,
    NotificationPageComponent,

    ClearSearchInputComponent,
    FormsPageComponent,
    MultiSelectAutocompleteComponent,
    ButtonRowRaisedComponent,
    RowDetailsComponent,
    SelectAutocompleteComponent,

    NotificationPopupComponent,
    FlashNotificationComponent,
    PaginatorTableComponent,
    SelectionTableComponent,
    SelectedTilesComponent,

    ArrayComparatorPipe,
    ArrayElementTogglerPipe,
    FilterArrayPipe,
    HighlightPipe,
    HighlightSearchPipe,
    SearchPipe,
    StringFormatterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,

    ScrollingModule,
  ],
  providers: [
    ArrayComparatorPipe,
    ArrayElementTogglerPipe,
    FilterArrayPipe,
    HighlightPipe,
    HighlightSearchPipe,
    SearchPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
