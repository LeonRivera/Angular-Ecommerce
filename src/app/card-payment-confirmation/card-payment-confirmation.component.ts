import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { OrderDto } from "../models/order-dto";
import { Product } from "../models/product";

@Component({
  selector: "app-card-payment-confirmation",
  templateUrl: "./card-payment-confirmation.component.html",
  styleUrls: ["./card-payment-confirmation.component.css"],
  providers: [DialogService, ConfirmationService],
})
export class CardPaymentConfirmationComponent implements OnInit {
  orderDto: OrderDto = new OrderDto();

  cartProductsConfirm: Product[] = [];

  constructor(
    private router: Router,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService
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
      message: "Are you sure that you want to perform this action?",
      accept: () => {
        console.log("accepted");
        this.router.navigate(['']);
      },
    });
  }
}
