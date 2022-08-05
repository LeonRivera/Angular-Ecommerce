import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { OrderDto } from '../models/order-dto';
import { Product } from '../models/product';

@Component({
  selector: 'app-card-payment-confirmation',
  templateUrl: './card-payment-confirmation.component.html',
  styleUrls: ['./card-payment-confirmation.component.css'],
  providers: [DialogService]
})
export class CardPaymentConfirmationComponent implements OnInit {

  orderDto:OrderDto = new OrderDto();

  cartProductsConfirm:Product[] = [];

  constructor(
    public dialogService: DialogService,
  ) { }


  displaySideBar:boolean;
  

  ngOnInit(): void {
    this.orderDto = history.state;

      console.log(this.orderDto);

    this.cartProductsConfirm = this.orderDto.products;
  }

  // showSideBar(){
  //   this.displaySideBar ? false : true;
  // }

  confirm(){

  }

}
