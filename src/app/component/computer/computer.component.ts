import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryType } from 'src/app/models/categorytype';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  computerProducts:any = [];
  constructor(private ProductsService: ProductsService, private CartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.computerProducts = this.ProductsService.products.filter(x => x.CategoryId == CategoryType.Computer);
  }

  AddToCart(product: Product){
    this.CartService.AddProductToCart(product)
    alert("Item Added To Cart")
  }

  GetDetails(product: Product){
    this.router.navigate(['/product-details'], {state: {details: product}})
  }
}
