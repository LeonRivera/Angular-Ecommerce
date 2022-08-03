import { Component, OnInit } from '@angular/core';
import { OrderDto } from '../models/order-dto';

@Component({
  selector: 'app-card-payment-confirmation',
  templateUrl: './card-payment-confirmation.component.html',
  styleUrls: ['./card-payment-confirmation.component.css']
})
export class CardPaymentConfirmationComponent implements OnInit {

  orderDto:OrderDto = new OrderDto();

  constructor() { }

  ngOnInit(): void {
    this.orderDto = history.state;

      console.log(this.orderDto);
  }

}
