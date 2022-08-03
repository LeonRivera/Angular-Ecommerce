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

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.orderDto = history.state;
  }

  
  nextStep():void{
    this.router.navigateByUrl('payment/confirmation', {state : this.orderDto})
  }

}
