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
      {
        label: "File",
        icon: "pi pi-fw pi-file",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-plus",
            items: [
              {
                label: "Bookmark",
                icon: "pi pi-fw pi-bookmark",
              },
              {
                label: "Video",
                icon: "pi pi-fw pi-video",
              },
            ],
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-trash",
          },
          {
            separator: true,
          },
          {
            label: "Export",
            icon: "pi pi-fw pi-external-link",
          },
        ],
      },
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
      },
      {
        label: "Users",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-user-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-user-minus",
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-users",
            items: [
              {
                label: "Filter",
                icon: "pi pi-fw pi-filter",
                items: [
                  {
                    label: "Print",
                    icon: "pi pi-fw pi-print",
                  },
                ],
              },
              {
                icon: "pi pi-fw pi-bars",
                label: "List",
              },
            ],
          },
        ],
      },
      {
        label: "Events",
        icon: "pi pi-fw pi-calendar",
        items: [
          {
            label: "Edit",
            icon: "pi pi-fw pi-pencil",
            items: [
              {
                label: "Save",
                icon: "pi pi-fw pi-calendar-plus",
              },
              {
                label: "Delete",
                icon: "pi pi-fw pi-calendar-minus",
              },
            ],
          },
          {
            label: "Archieve",
            icon: "pi pi-fw pi-calendar-times",
            items: [
              {
                label: "Remove",
                icon: "pi pi-fw pi-calendar-minus",
              },
            ],
          },
        ],
      },
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
        header: 'Your cart',
        width: '70%',
        data: {
          productsCart: this.cartProductsHeader
        }
    });
}

}
