import { Product } from "./product";

export class OrderDto {

    name:string = "";
    age:number = 0;
    email:string = "";
    address:string = ""; 
    titular:string = "";
    targetNumber:number = 0;
    cvv:number = 0;
    expirationDate:string = "";
    totalPrice:number = 0.0;
    quantity:number = 0;
    products:Product[] = [];
    paymentType:string;

}
