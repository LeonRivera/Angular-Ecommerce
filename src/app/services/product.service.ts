import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { AbstractRepository } from './abstract-repository';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractRepository<Product>{
  constructor(httpClient: HttpClient,router: Router) { 
    super(httpClient, router, "model");
  }
}
