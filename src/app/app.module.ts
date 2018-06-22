import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { BasketSchoolComponent } from './components/basket-school/basket-school.component';


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
	TestCurseComponent,
	BasketSchoolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting,
    HttpClientModule
  ],
  providers: [
    FieldValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
