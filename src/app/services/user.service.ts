import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AbstractRepository } from './abstract-repository';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractRepository<User>{
  constructor(httpClient: HttpClient,router: Router) { 
    super(httpClient, router, "user");
  }
}
