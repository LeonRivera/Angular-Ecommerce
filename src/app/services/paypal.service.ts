import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PaypalService {
  private baseUrl: string = "";
  private ENV: string = "dev";

  constructor(protected httpClient: HttpClient, protected router: Router) {
    if (this.ENV === "dev") {
      this.baseUrl = `localhost:8080/api/v1/services/paypal`;
    } else {
      this.baseUrl = `https://fotsi-ecommerce-api.azurewebsites.net/api/v1/services/paypal`;
    }
  }


  payment(type:any):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl, type)
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }



}
