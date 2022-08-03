import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  cartProductsHome:Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }


    getProductsCart(products:Product[]):void{
    console.log("Home component");
    console.log(products);
    this.cartProductsHome = products;
    console.log(this.cartProductsHome);
  }

}
