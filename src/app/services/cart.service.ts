import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInCart: Product[]=[]
  constructor() { }
  AddProductToCart(product: Product){
    this.productsInCart.push(product)
    debugger
  }

  SumOfProductsInCart(): number{
    var sum = 0
    this.productsInCart.forEach(x => {
      sum+=x.Price    
    });

    return sum;
  }

  CheckOut(){
    this.productsInCart = [];
  }
}
