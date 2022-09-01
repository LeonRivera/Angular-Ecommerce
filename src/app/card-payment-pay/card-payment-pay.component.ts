import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDto } from '../models/order-dto';

@Component({
  selector: 'app-card-payment-pay',
  templateUrl: './card-payment-pay.component.html',
  styleUrls: ['./card-payment-pay.component.css']
})
export class CardPaymentPayComponent implements OnInit {

  orderDto:OrderDto = new OrderDto();

  paymentOptions:any[] = [];



  constructor(private router:Router) { 
    this.paymentOptions = [
      {name: "PayPal", value:"paypal"},
      {name: "Esta web", value:"web"}
    ]
  }

  ngOnInit(): void {
    // this.orderDto.paymentType="web"
    this.orderDto = history.state;

    console.log("Restorin localstorage pay");
    this.orderDto.products = localStorage.getItem("cartProducts") ?  JSON.parse(localStorage.getItem("cartProducts")) : [];
  }

  
  nextStep():void{
    this.router.navigateByUrl('payment/confirmation', {state : this.orderDto})
  }

}
