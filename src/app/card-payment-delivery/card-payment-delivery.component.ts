import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDto } from '../models/order-dto';

@Component({
  selector: 'app-card-payment-delivery',
  templateUrl: './card-payment-delivery.component.html',
  styleUrls: ['./card-payment-delivery.component.css']
})
export class CardPaymentDeliveryComponent implements OnInit {


  orderDto:OrderDto = new OrderDto();

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.orderDto = history.state;

    //Restoring another time the products of local storage in delivery 
    console.log("Restorin localstorage delivery");
    this.orderDto.products = localStorage.getItem("cartProducts") ?  JSON.parse(localStorage.getItem("cartProducts")) : [];
    console.log(this.orderDto);
  }

  
  nextStep():void{
    this.router.navigateByUrl('payment/pay', {state : this.orderDto})
  }

}
