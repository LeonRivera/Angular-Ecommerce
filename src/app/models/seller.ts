import { Product } from "./product";

export class Seller {
  id: number;
  fullName: string;
  email: string;
  password: string;
  createAt: string;
  urlImage: string;
  products: Product[];
}
