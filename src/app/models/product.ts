import { Seller } from "./seller";

export class Product {
    id:number;
    sku:string;
    name:string;
    description:string;
    price:number;
    createAt:string;
    quantity:number;
    urlImage:string;
    seller:Seller;
}
