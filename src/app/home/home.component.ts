import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  cartProductsHome:Product[] = [];

  paramSuccess:string = "";

  constructor(private activatedRoute:ActivatedRoute,
    private messageService: MessageService) { 
    this.activatedRoute.queryParams.subscribe(p => {
      this.paramSuccess = p['success'];
      
      if(this.paramSuccess == 'true'){
        console.log("success");

        setTimeout(() => {
        this.messageService.add({severity:'success', summary:'Pago Completado', detail:'Tu pago fue completado'});
        }, 1000);

      }else if(this.paramSuccess == 'false'){
        //obtener productos de sesion
        setTimeout(() => {
          this.messageService.add({severity:'success', summary:'Pago Cancelado', detail:'Tu pago fue cancelado'});
        }, 1000);
      }
    })
  }

  ngOnInit(): void {
    this.goToProducts();
  }


    getProductsCart(products:Product[]):void{
    console.log("Home component");
    console.log(products);
    this.cartProductsHome = products;
    console.log(this.cartProductsHome);
  }

  goToProducts(){
    console.log("here");
    this.messageService.add({severity:'success', summary:'Pago Cancelado', detail:'Tu pago fue cancelado'});

  }

}
