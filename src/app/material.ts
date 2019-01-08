import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
  ]
})

export class MaterialModule { }
