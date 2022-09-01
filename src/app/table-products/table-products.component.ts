import { Component, Input, OnInit, Optional } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { OrderDto } from "../models/order-dto";
import { Product } from "../models/product";
import { ProductOrder } from "../models/product-order";

@Component({
  selector: "app-table-products",
  templateUrl: "./table-products.component.html",
  styleUrls: ["./table-products.component.css"],
})
export class TableProductsComponent implements OnInit {

  
  @Input() cartProducts:ProductOrder[] = [];
  
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

   this.calculateTotalPrice();
    
  }

  calculateTotalPrice():void{
    this.totalCartPrice = 0;
    if(this.cartProducts != undefined){
      this.cartProducts.forEach( p => {
        this.totalCartPrice += p.totalPrice;
      })
    }
  }


  proceedPayment(){
    this.orderDto.products = this.cartProducts;
    this.orderDto.totalPrice = this.totalCartPrice;
    this.orderDto.quantity = 0;


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


  deleteProductCar(id:number):void{

    // let cartStorage = JSON.parse(localStorage.getItem("cartProducts"))

    this.cartProducts = this.cartProducts.filter( p => {
      if(p.product.id == id){
        if(p.quantity > 1){
          p.totalPrice -= p.product.price
          p.quantity -= 1;
          return p.product.id;
        }else{
          return p.product.id != id;
        }
      }else{
        return p;
      }
    })



    localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));

    this.calculateTotalPrice();
  }
}
