import { Product } from "./product";

export class OrderDto {

    nombre:string = "";
    edad:number = 0;
    correo:string = "";
    direccion:string = ""; 
    titular:string = "";
    numeroTarjeta:number = 0;
    cvv:number = 0;
    caducidad:string = "";
    totalPrice:number = 0;
    quantity:number = 0;
    products:Product[] = [];

}
