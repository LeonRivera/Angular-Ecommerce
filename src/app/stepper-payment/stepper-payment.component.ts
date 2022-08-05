import { Component, OnInit } from "@angular/core";
import { MenuItem, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { Subscription } from "rxjs";

@Component({
  selector: "app-stepper-payment",
  templateUrl: "./stepper-payment.component.html",
  styleUrls: ["./stepper-payment.component.css"],
  providers: [DialogService, MessageService],
})
export class StepperPaymentComponent implements OnInit {
  items: MenuItem[];

  subscription: Subscription;
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: "Informacion Personal",
        routerLink: "info",
      },
      {
        label: "Envio",
        routerLink: "delivery",
      },
      {
        label: "Pago",
        routerLink: "pay",
      },
      {
        label: "Confirmacion",
        routerLink: "confirmation",
      },
    ];
  }
}
