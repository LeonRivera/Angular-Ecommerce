import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { Product } from "../models/product";
import { TableProductsComponent } from "../table-products/table-products.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  providers: [DialogService],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  @Input() cartProductsHeader: Product[] = [];

  constructor(public dialogService: DialogService,
    private router:Router) {}

  productsQuantity: number = this.cartProductsHeader.length;

  ngOnInit(): void {
    this.items = [
      
      // {
      //   label: "Edit",
      //   icon: "pi pi-fw pi-pencil",
      // },
      
      
      {
        label: "Home",
        icon: "pi pi-home",
        routerLink: ['']
      },
      {
        label: "About",
        icon: "pi pi-users",
        routerLink: ['about']
      },
    ];
  }

  // getProductsCart(products:Product[]):void{
  //   console.log("Header component");
  //   console.log(products);
  // }


  show() {
    const ref = this.dialogService.open(TableProductsComponent, {
        header: 'Tu carrito',
        width: '70%',
        data: {
          productsCart: this.cartProductsHeader
        }
    });
}

}
