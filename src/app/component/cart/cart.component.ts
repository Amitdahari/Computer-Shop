import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productInCart: Product[]=[]
  total: number = 0

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.ResetCart();
  }

  ResetCart(){
    this.productInCart = this.cartService.productsInCart
    this.total = this.cartService.SumOfProductsInCart();
  }

  BackToCase(){
    this.router.navigate(['/case']);
  }

  CheckOut(){
    this.cartService.CheckOut();
    this.ResetCart();
    this.router.navigate(['/cart']);
  }



}
