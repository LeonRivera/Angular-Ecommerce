import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { MessageService } from "primeng/api";
import { OperationUtils } from "../utils/operation-utils";
import { AppConstants } from "../utils/app-constants";

export abstract class AbstractRepository<T> {
  //private httpHeaders = new HttpHeaders({'Content-type':'application/json'});
  private baseUrl: string = "";
  private operationUtils: OperationUtils = new OperationUtils();
  // private paramOfSearch:string = "";


  constructor(
    protected httpClient: HttpClient,
    protected router: Router,
    protected modelUrl: string,
    protected messageService: MessageService = new MessageService()
  ) {

    this.baseUrl = this.operationUtils.getEnvBaseUrl(modelUrl);
    console.log("base url: "+this.baseUrl);
  }

  findAll(): Observable<any> {
    return this.httpClient.get<T>(this.baseUrl);
  }

  findById(id: number): Observable<any> {
    console.log(`${this.baseUrl}/${id}`);
    return this.httpClient.get<T>(`${this.baseUrl}/${id}`).pipe(
      catchError((e) => {
        return throwError(e);
      })
    );
  }

  findByParam(param, paramOfSearch: string): Observable<T> {
    // this.paramOfSearch = paramOfSearch;
    return this.httpClient
      .get<T>(`${this.baseUrl}/${paramOfSearch}/${param}`)
      .pipe(
        catchError((e) => {
          console.log(e.error.message);
          this.messageService.add({
            severity: "error",
            summary: "Ha ocurrido un error",
            detail: e.error.message,
          });
          return throwError(e);
        })
      );
  }

  save(type: any): Observable<any> {
    return this.httpClient.post<T>(this.baseUrl, type).pipe(
      catchError((e) => {
        return throwError(e);
      })
    );
  }

  update(type: any): Observable<any> {
    return this.httpClient.put<T>(this.baseUrl, type).pipe(
      catchError((e) => {
        return throwError(e);
      })
    );
  }

  deleteByType(type: T): Observable<any> {
    return this.httpClient
      .request<any>("delete", this.baseUrl, { body: type })
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }

  deleteById(id: number): Observable<any> {
    console.log("Eliminando desde abstract repository con " + this.baseUrl);
    return this.httpClient.delete<T>(`${this.baseUrl}/${id}`).pipe(
      catchError((e) => {
        console.log("Ocurrio un error al eliminar un" + this.modelUrl);
        return throwError(e);
      })
    );
  }
}
