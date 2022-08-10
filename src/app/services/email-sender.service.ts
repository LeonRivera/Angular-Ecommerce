import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  private baseUrl: string = "";
  private ENV:string = "prod";

    
  constructor(protected httpClient: HttpClient,protected router: Router){
    if(this.ENV === 'dev'){
      this.baseUrl = `http://localhost:8080/api/v1/services/email`
    }else{
      this.baseUrl = `https://fotsi-ecommerce-api.azurewebsites.net/api/v1/services/email`
    }

  } 

  sendCode(email:string):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}?email=${email}`);
  }


}
