import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Project
    SharedModule,
    MaterialModule
  ],
  providers: [ LoginService ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
