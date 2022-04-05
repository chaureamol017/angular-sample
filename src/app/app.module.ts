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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SelectAutocompleteComponent } from './drop-down/select-autocomplete/select-autocomplete.component';
import { SelectionComponent } from './table/selection/selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { DropDownPageComponent } from './drop-down/drop-down-page/drop-down-page.component';
import { MultiSelectAutocompleteComponent } from './drop-down/multi-select-autocomplete/multi-select-autocomplete.component';
import { HighlightSearch } from './shared/highlight-search.pipe';
import { SearchPipe } from './models/search-pipe';
import { TablePageComponent } from './table/table-page/table-page.component';
import { DialogPageComponent } from './dialog/dialog-page/dialog-page.component';
import { NotificationPageComponent } from './notification/notification-page/notification-page.component';
import { ClearSearchInputComponent } from './forms/clear-search-input/clear-search-input.component';
import { RowDetailsComponent } from './button/row-details/row-details.component';
import { SelectionTableComponent } from './table/selection-table/selection-table.component';
import { ButtonPageComponent } from './button/button-page/button-page.component';
import { RaisedRowComponent } from './button/raised-row/raised-row.component';
import { SelectedTilesComponent } from './table/selected-tiles/selected-tiles.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SelectAutocompleteComponent,
    SelectionComponent,
    DropDownPageComponent,
    MultiSelectAutocompleteComponent,

    HighlightSearch,
    SearchPipe,

    TablePageComponent,
    DialogPageComponent,
    NotificationPageComponent,
    ClearSearchInputComponent,
    RowDetailsComponent,
    SelectionTableComponent,
    ButtonPageComponent,
    RaisedRowComponent,
    SelectedTilesComponent,
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
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,

    ScrollingModule,
    // CdkScrollableModule,
    // ScrollDispatchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
