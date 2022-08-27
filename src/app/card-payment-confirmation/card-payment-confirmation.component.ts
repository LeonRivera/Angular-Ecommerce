import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { OrderDto } from "../models/order-dto";
import { Product } from "../models/product";
import { ProductOrder } from "../models/product-order";
import { PaypalService } from "../services/paypal.service";

@Component({
  selector: "app-card-payment-confirmation",
  templateUrl: "./card-payment-confirmation.component.html",
  styleUrls: ["./card-payment-confirmation.component.css"],
  providers: [DialogService, ConfirmationService],
})
export class CardPaymentConfirmationComponent implements OnInit {
  orderDto: OrderDto = new OrderDto();

  cartProductsConfirm: ProductOrder[] = [];

  constructor(
    private router: Router,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private paypalService:PaypalService
  ) {}

  displaySideBar: boolean;

  ngOnInit(): void {
    this.orderDto = history.state;

    console.log(this.orderDto);

    this.cartProductsConfirm = this.orderDto.products;
  }

  // showSideBar(){
  //   this.displaySideBar ? false : true;
  // }

  confirm() {
    this.confirmationService.confirm({
      message: "Estas seguro que quieres confirmar esta accion?",
      accept: () => {
        // console.log("accepted");

        if(this.orderDto.paymentType === 'paypal'){
          //call paypal controller
          let formData = new FormData();
          formData.append("total",this.orderDto.totalPrice.toString())
          formData.append("currency","MXN")
          formData.append("description","Pago de productos FOCSI");
          formData.append("method",this.orderDto.paymentType);

          console.log(formData.get('total'));
          console.log(formData.get('method'));
          console.log("paypal sending");
          this.paypalService.payment(formData).subscribe(e => {
            console.log(e);
            // this.router.navigateByUrl(e);
            window.location.href = e;
          })

        }else{
          this.router.navigate(['']);

        }
    


        
          


      },
    });
  }
}
