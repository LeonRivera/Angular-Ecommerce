import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderDto } from "../models/order-dto";
import { ConfirmationService, Message } from "primeng/api";

@Component({
  selector: "app-card-payment-info",
  templateUrl: "./card-payment-info.component.html",
  styleUrls: ["./card-payment-info.component.css"],
  providers: [ConfirmationService],
})
export class CardPaymentInfoComponent implements OnInit {

  msgsValidationInputs: Message[];

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

    console.log(this.orderDto.name);

    let isValidForm = true;

    if(this.orderDto.name === ""){
      isValidForm = false;
      console.log("name vacio");
      this.msgsValidationInputs = [{severity:'warn', summary:'Warning', detail:`Ingresa un valor sobre el nombre`}];
    }

    if(this.orderDto.age === 0){
      isValidForm = false;
      console.log("name vacio");
      this.msgsValidationInputs = [{severity:'warn', summary:'Warning', detail:`Ingresa un valor sobre la edad`}];
    }

    if(this.orderDto.email === ""){
      isValidForm = false;
      console.log("name vacio");
      this.msgsValidationInputs = [{severity:'warn', summary:'Warning', detail:`Ingresa un valor sobre el email`}];
    }

    if(isValidForm){
      this.router.navigateByUrl("payment/delivery", { state: this.orderDto });
    }
  }

  
}
