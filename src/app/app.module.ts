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
import { PassageComponent } from './components/passage/passage.component';
import { SendTextComponent } from './components/send-text/send-text.component';
import { TestCurseComponent } from './components/test-curse/test-curse.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalificationsComponent,
    HomeComponent,
    DollarCalculateComponent,
    FieldValidatorComponent,
    PassageComponent,
    SendTextComponent,
    TestCurseComponent
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
