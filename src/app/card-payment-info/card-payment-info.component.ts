import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderDto } from "../models/order-dto";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-card-payment-info",
  templateUrl: "./card-payment-info.component.html",
  styleUrls: ["./card-payment-info.component.css"],
  providers: [ConfirmationService],
})
export class CardPaymentInfoComponent implements OnInit {
  orderDto: OrderDto = new OrderDto();

  num:string = "";
  cc:string="";
  constructor(
    private router: Router,
    private location: Location,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    // this.router.getCurrentNavigation().extras.state;
    console.log("Info payment state actual:");
    // console.log(this.location.getState());

    this.orderDto = history.state;

    console.log(this.orderDto);
  }

  nextStep(): void {
    this.router.navigateByUrl("payment/delivery", { state: this.orderDto });
  }

  
}
