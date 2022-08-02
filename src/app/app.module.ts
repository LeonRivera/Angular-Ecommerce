import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModelsComponent } from './table-models/table-models.component';
import { FormModelsComponent } from './form-models/form-models.component';
import { PrimeNgComponentsModule } from './modules/prime-ng-components/prime-ng-components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableUsersComponent } from './table-users/table-users.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { CardsProductsComponent } from './cards-products/cards-products.component';


@NgModule({
  declarations: [
    AppComponent,
    TableModelsComponent,
    FormModelsComponent,
    TableUsersComponent,
    FormUsersComponent,
    CardsProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgComponentsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
