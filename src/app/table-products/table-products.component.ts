import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { OrderDto } from "../models/order-dto";
import { Product } from "../models/product";

@Component({
  selector: "app-table-products",
  templateUrl: "./table-products.component.html",
  styleUrls: ["./table-products.component.css"],
})
export class TableProductsComponent implements OnInit {

  cartProducts:Product[] = [];
  orderDto:OrderDto = new OrderDto();

  totalCartPrice:number = 0;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private router:Router
  ) {

    let psCart = this.config.data.productsCart;
    console.log("Table Component");
    console.log(psCart);
    if(psCart.length > 0){
      this.cartProducts = psCart;
      this.cartProducts.forEach( p => {
        this.totalCartPrice += p.price;
      })
    }

  }

  ngOnInit(): void {}

  proceedPayment(){
    this.orderDto.products = this.cartProducts;
    this.orderDto.totalPrice = this.totalCartPrice;
    this.orderDto.quantity = this.cartProducts.length;


    console.log("actual object: " + this.orderDto.products);

    //parsing to JSON
  //  let jsonOrderDto =  JSON.stringify(this.orderDto);
  //   console.log("JSON: "+this.orderDto);

    this.ref.close();
  
    // this.router.navigate(['payment/info']);
    this.router.navigateByUrl('payment/info', {state : this.orderDto})
  }
}
