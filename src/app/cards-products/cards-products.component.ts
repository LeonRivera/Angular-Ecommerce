import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { FormModelsComponent } from '../form-models/form-models.component';
import { FormUsersComponent } from '../form-users/form-users.component';
import { Email } from '../models/email';
import { Model } from '../models/model';
import { User } from '../models/user';
import { AbstractRepository } from '../services/abstract-repository';
import { ModelService } from '../services/model.service';
import { UserService } from '../services/user.service';
import { OperationUtils } from '../utils/operation-utils';
import { MessageService } from 'primeng/api';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';


@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.css'],
  providers: [DialogService, MessageService],
})



export class CardsProductsComponent implements OnInit {

  products:Product[];

  cartProducts:Product[] = [];

  @Output() cartProductsEvt = new EventEmitter<Product[]>();

  constructor(
    private productService: ProductService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) { 
    this.productService.findAll().subscribe(p => {
      this.products = p;
    });
  }

  ngOnInit(): void {
  }

  addToCart(product:Product):void{
    console.log("agregando : "+ product.name);
    this.cartProducts.push(product);

    console.log(this.cartProducts);

    this.cartProductsEvt.emit(this.cartProducts);

    this.messageService.add({
      severity: 'success',
      summary: 'Agregado al carrito',
      detail: 'Agregaste un producto al carrito',
    });
  }

}
