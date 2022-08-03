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
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StepperPaymentComponent } from './stepper-payment/stepper-payment.component';
import { CardPaymentInfoComponent } from './card-payment-info/card-payment-info.component';
import { CardPaymentDeliveryComponent } from './card-payment-delivery/card-payment-delivery.component';
import { CardPaymentPayComponent } from './card-payment-pay/card-payment-pay.component';
import { CardPaymentConfirmationComponent } from './card-payment-confirmation/card-payment-confirmation.component';
import { TableProductsComponent } from './table-products/table-products.component';


@NgModule({
  declarations: [
    AppComponent,
    TableModelsComponent,
    FormModelsComponent,
    TableUsersComponent,
    FormUsersComponent,
    CardsProductsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StepperPaymentComponent,
    CardPaymentInfoComponent,
    CardPaymentDeliveryComponent,
    CardPaymentPayComponent,
    CardPaymentConfirmationComponent,
    TableProductsComponent
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
