import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryType } from 'src/app/models/categorytype';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  storageProducts:any = [];
  constructor(private ProductsService: ProductsService, private CartService: CartService, private router: Router) { }

  ngOnInit(): void { 
    this.storageProducts = this.ProductsService.products.filter(x => x.CategoryId == CategoryType.Storage);
  }

  AddToCart(product: Product){
    this.CartService.AddProductToCart(product)
    alert("Item Added To Cart")
  }

  GetDetails(product: Product){
    this.router.navigate(['/product-details'], {state: {details: product}})
  }
}
