import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CardPaymentConfirmationComponent } from "./card-payment-confirmation/card-payment-confirmation.component";
import { CardPaymentDeliveryComponent } from "./card-payment-delivery/card-payment-delivery.component";
import { CardPaymentInfoComponent } from "./card-payment-info/card-payment-info.component";
import { CardPaymentPayComponent } from "./card-payment-pay/card-payment-pay.component";
import { CardsProductsComponent } from "./cards-products/cards-products.component";
import { FormCustomersComponent } from "./form-customers/form-customers.component";
import { FormModelsComponent } from "./form-models/form-models.component";
import { FormUsersComponent } from "./form-users/form-users.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { StepperPaymentComponent } from "./stepper-payment/stepper-payment.component";
import { TableModelsComponent } from "./table-models/table-models.component";
import { TableUsersComponent } from "./table-users/table-users.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "register", component: FormCustomersComponent},


  { path: "users", component: TableUsersComponent },
  { path: "users/form", component: FormUsersComponent },
  { path: "customers/form", component: FormCustomersComponent },
  { path: "users/form/:id", component: FormUsersComponent },
  {
    path: "payment",
    component: StepperPaymentComponent,
    children: [
      {
        path: "info",
        component: CardPaymentInfoComponent,
      },
      {
        path: "delivery",
        component: CardPaymentDeliveryComponent,
      },
      {
        path: "pay",
        component: CardPaymentPayComponent,
      },
      {
        path: "confirmation",
        component: CardPaymentConfirmationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
