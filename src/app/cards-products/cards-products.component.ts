import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { DialogService } from "primeng/dynamicdialog";
import { FormModelsComponent } from "../form-models/form-models.component";
import { FormUsersComponent } from "../form-users/form-users.component";
import { Email } from "../models/email";
import { Model } from "../models/model";
import { User } from "../models/user";
import { AbstractRepository } from "../services/abstract-repository";
import { ModelService } from "../services/model.service";
import { UserService } from "../services/user.service";
import { OperationUtils } from "../utils/operation-utils";
import { MessageService } from "primeng/api";
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";
import { ProductOrder } from "../models/product-order";

@Component({
  selector: "app-cards-products",
  templateUrl: "./cards-products.component.html",
  styleUrls: ["./cards-products.component.css"],
  providers: [DialogService, MessageService],
})
export class CardsProductsComponent implements OnInit {
  products: Product[];

  cartProducts: Product[] = [];
  cartProductOrders: ProductOrder[] = [];

  contentLoaded:boolean = false;

  //Sending to home component
  @Output() cartProductsEvt = new EventEmitter<ProductOrder[]>();

  constructor(
    private productService: ProductService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {
    this.productService.findAll().subscribe((p) => {
      this.products = p;
      this.contentLoaded = true;
    });
  }

  ngOnInit(): void {


    //Recover localstorage
    //if we have products on the local storage fill the cartProductsOrder otherwise set [] empty
    if(localStorage.getItem("cartProducts") != null){
      this.cartProductOrders = JSON.parse(localStorage.getItem("cartProducts"));
    }

  }

  addToCart(product: Product): void {

    let productExistsOnCart = false;

    this.cartProductOrders.forEach((p) => {
      if (p.product.id === product.id) {
        productExistsOnCart = true;
      }
    });

    if (!productExistsOnCart) {
      this.cartProductOrders.push(new ProductOrder(product.price, 1, product));
    }else{
      this.cartProductOrders.forEach(p => {
        if(p.product.id === product.id){
          p.quantity += 1;
          p.totalPrice += product.price;
        }
      })
    }

    console.log(this.cartProductOrders);


    
    // localStorage.setItem("cartProducts", JSON.stringify(this.cartProductOrders));




    this.cartProductsEvt.emit(this.cartProductOrders);

    this.messageService.add({
      severity: "success",
      summary: "Agregado al carrito",
      detail: `Agregaste ${product.name} al carrito!`,
    });
  }
}
