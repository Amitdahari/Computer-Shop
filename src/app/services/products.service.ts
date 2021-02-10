import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string;
  products: Product[]=[];

  constructor(private http:HttpClient) { 
    this.url = "http://localhost:8000";
  }

  GetAllProducts(): void{
    var allProducts =  this.http.get<Product[]>(`${this.url}/products`).subscribe(res =>{
      this.products = res
    });
  }
}
