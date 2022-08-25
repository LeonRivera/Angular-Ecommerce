import { Product } from "./product";

export class ProductOrder {
    id:number;
    totalPrice:number;
    quantity:number;
    product:Product;

   
    constructor(totalPrice, quantity, product){
        this.totalPrice = totalPrice;
        this.quantity = quantity;
        this.product = product;
    }
}
