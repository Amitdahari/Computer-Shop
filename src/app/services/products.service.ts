import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string;
  constructor(private http:HttpClient) { 
    this.url = "http://localhost:8000";

  }

  GetAllProducts(): Observable<any>{
    return this.http.get<any>(`${this.url}/products`);
  }
}
