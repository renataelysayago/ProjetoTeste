import { NgModule } from '@angular/core';
import { MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RegisterIconService } from '@services/register-icon.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTreeModule } from '@angular/material/tree';
import { DatePipe } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export const MY_FORMATS = {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'DD/MM/YYYY',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };

  @NgModule({
    providers: [
      { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
      { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
      DatePipe
    ],
    exports: [
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCardModule,
      MatTableModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      MatCheckboxModule,
      MatDialogModule,
      MatSelectModule,
      MatSidenavModule,
      MatToolbarModule,
      MatChipsModule,
      MatMenuModule,
      MatPaginatorModule,
      MatBottomSheetModule,
      MatSortModule,
      MatDividerModule,
      MatExpansionModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      DragDropModule,
      MatTabsModule,
      MatRadioModule,
      MatAutocompleteModule,
      MatProgressBarModule,
      DragDropModule,
      MatSnackBarModule,
      MatTreeModule,
      MatRadioModule,
      MatSlideToggleModule
    ]
  })  
  export class MaterialModule {
    constructor(private registerIcon: RegisterIconService) {
      this.registerIcon.Init();
    }
  }
