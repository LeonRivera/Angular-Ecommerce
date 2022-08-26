import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { Product } from "../models/product";
import { ProductOrder } from "../models/product-order";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  cartProductsHome: ProductOrder[] = [];

  paramSuccess: string = "";

  imagesCarousel: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {
    this.imagesCarousel = [
      "https://images.unsplash.com/photo-1562868198-be7fbd14123d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://mexicorutamagica.mx/wp-content/uploads/2021/10/artesanias-mexicanas-mas-representativas.jpg",
      "https://mymodernmet.com/wp/wp-content/uploads/2020/10/Artesanias-mexicanas-1.jpg",
      "https://blog.xcaret.com/es/wp-content/uploads/2020/11/Artesania-mexicana-arte-huichol.jpg",
      "https://lasbuenascompras.com.mx/wp-content/uploads/2021/04/artesanos-artesanias-mexico.jpg",
    ];
    this.activatedRoute.queryParams.subscribe((p) => {
      this.paramSuccess = p["success"];

      if (this.paramSuccess == "true") {
        console.log("success");

        setTimeout(() => {
          this.messageService.add({
            severity: "success",
            summary: "Pago Completado",
            detail: "Tu pago fue completado",
          });
          router.navigate(["/"]);
        }, 1000);
      } else if (this.paramSuccess == "false") {
        //obtener productos de sesion
        setTimeout(() => {
          this.messageService.add({
            severity: "success",
            summary: "Pago Cancelado",
            detail: "Tu pago fue cancelado",
          });
          //refreshing url params
          router.navigate(["/"]);
        }, 1000);
      }
    });
  }

  ngOnInit(): void {
    this.goToProducts();
  }


  //Getting from cards-products when we add to cart
  getProductsCart(products: ProductOrder[]): void {
    console.log("Home component");
    console.log(products);
    this.cartProductsHome = products;
    console.log(this.cartProductsHome);
  }

  goToProducts() {
    console.log("here");
    this.messageService.add({
      severity: "success",
      summary: "Pago Cancelado",
      detail: "Tu pago fue cancelado",
    });
  }
}
