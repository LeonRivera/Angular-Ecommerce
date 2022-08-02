import { Injectable } from '@angular/core';
import { Model } from '../models/model';
import { AbstractRepository } from './abstract-repository';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService extends AbstractRepository<Model>{
  constructor(httpClient: HttpClient,router: Router) { 
    super(httpClient, router, "model");
  }
}
