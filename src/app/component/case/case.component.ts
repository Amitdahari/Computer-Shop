import { Component, OnInit } from '@angular/core';
import { CategoryType } from './../../models/categorytype'
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  caseProducts:any = [];
  constructor(private ProductsService: ProductsService, private CartService: CartService, private router: Router) { }

  ngOnInit(): void {
    console.log(CategoryType.Case)
    this.caseProducts = this.ProductsService.products.filter(x => x.CategoryId == CategoryType.Case);
  }

  AddToCart(product: Product){
    this.CartService.AddProductToCart(product)
    alert("Item Added To Cart")
  }

  GetDetails(product: Product){
    this.router.navigate(['/product-details'], {state: {details: product}})
  }

}
