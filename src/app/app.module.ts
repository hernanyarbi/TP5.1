import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRouting } from './app.routes';

import { FieldValidatorService } from './_sharedComponents/field-validator/field-validator.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalificationsComponent } from './components/califications/califications.component';
import { HomeComponent } from './components/home/home.component';
import { DollarCalculateComponent } from './components/dollar-calculate/dollar-calculate.component';
import { FieldValidatorComponent } from './_sharedComponents/field-validator/field-validator.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalificationsComponent,
    HomeComponent,
    DollarCalculateComponent,
    FieldValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [
    FieldValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
