import { Component, Input, OnInit, Optional } from "@angular/core";
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

  
  @Input() cartProducts:Product[] = [];
  
  @Input() pay:boolean;

  orderDto:OrderDto = new OrderDto();

  totalCartPrice:number = 0;

  constructor(
    @Optional()
    public ref: DynamicDialogRef,
    @Optional()
    public config: DynamicDialogConfig,
    private router:Router
  ) {

    if(config != null){
      let psCart = this.config.data.productsCart;
      console.log("Table Component");
      console.log(psCart);
      if(psCart.length > 0){
        this.cartProducts = psCart;
      }
    }

   

    // if(config == null && this.cartProducts.length > 0){
    //   this.cartProducts.forEach( p => {
    //     this.totalCartPrice += p.price;
    //   })
    // }
  }

  ngOnInit(): void {

    if(this.cartProducts != undefined){
      this.cartProducts.forEach( p => {
        this.totalCartPrice += p.price;
      })
    }
    
  }

  proceedPayment(){
    this.orderDto.products = this.cartProducts;
    this.orderDto.totalPrice = this.totalCartPrice;
    this.orderDto.quantity = this.cartProducts.length;


    console.log("actual object: " + this.orderDto.products);

    //parsing to JSON
  //  let jsonOrderDto =  JSON.stringify(this.orderDto);
  //   console.log("JSON: "+this.orderDto);
    if(this.ref != null){
      this.ref.close();
    }
  
    // this.router.navigate(['payment/info']);
    this.router.navigateByUrl('payment/info', {state : this.orderDto})
  }

  // calculateTotal():number{
  //   this.cartProducts.forEach( p => {
  //     this.totalCartPrice += p.price;
  //   })

  //   return this.totalCartPrice;
  // }
}
