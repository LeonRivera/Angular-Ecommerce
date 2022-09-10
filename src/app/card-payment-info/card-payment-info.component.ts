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

  // invalidInput:string = "ng-invalid ng-dirty";
  invalidName:boolean = false;
  invalidAge:boolean = false;
  invalidEmail:boolean = false;

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
      this.invalidName = true;
      isValidForm = false;
      console.log("name vacio");
      this.msgsValidationInputs = [{severity:'error', summary:'Campo requerido', detail:`Ingresa un valor sobre el nombre`}];
    }else{
      this.invalidName = false;
    }

    if(this.orderDto.age === 0){
      this.invalidAge = true;
      isValidForm = false;
      console.log("age vacio");
      this.msgsValidationInputs = [{severity:'error', summary:'Campo requerido', detail:`Ingresa un valor sobre la edad`}];
    }else{
      this.invalidAge = false;
    }

    if(this.orderDto.email === ""){
      this.invalidEmail = true
      isValidForm = false;
      console.log("email vacio");
      this.msgsValidationInputs = [{severity:'error', summary:'Campo requerido', detail:`Ingresa un valor sobre el email`}];
    }else{
      this.invalidEmail = false;
    }

    if(isValidForm){
      this.router.navigateByUrl("payment/delivery", { state: this.orderDto });
    }


  }

  
}
