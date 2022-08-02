import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

export abstract class AbstractRepository<T> {

    
//   private httpHeaders = new HttpHeaders({'Content-type':'application/json'});
  private devBaseUrl: string = "";
  private prodBaseUrl: string = "";
    
  constructor(protected httpClient: HttpClient,protected router: Router,protected modelUrl: string){
    this.devBaseUrl = `http://localhost:8080/api/v1/${modelUrl}`
  } 

  findAll():Observable<any>{
    console.log("findAll = "+this.devBaseUrl);
    return this.httpClient.get<T>(this.devBaseUrl)
  }

  findById(id:number):Observable<any>{  
    console.log(`${this.devBaseUrl}/${id}`);
    return this.httpClient.get<T>(`${this.devBaseUrl}/${id}`)
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }

  save(type:any):Observable<any>{  
    return this.httpClient.post<T>(this.devBaseUrl, type)
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }

  update(type:any):Observable<any>{  
    return this.httpClient.put<T>(this.devBaseUrl, type)
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }

  deleteByType(type:T):Observable<any>{  
    return this.httpClient.request<any>('delete', this.devBaseUrl, {body: type})
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }

  deleteById(id:number):Observable<any>{  
    console.log("Eliminando desde abstract repository con " + this.devBaseUrl);
    return this.httpClient.delete<T>(`${this.devBaseUrl}/${id}`)
    .pipe(
      catchError(e => {
        console.log("Ocurrio un error al eliminar un" + this.modelUrl);
        return throwError(e);
      })
    )
  }


}
