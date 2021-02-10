import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryType } from 'src/app/models/categorytype';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {

  ramProducts:any = [];
  constructor(private ProductsService: ProductsService, private CartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.ramProducts = this.ProductsService.products.filter(x => x.CategoryId == CategoryType.RAM);
  }
  AddToCart(product: Product){
    this.CartService.AddProductToCart(product)
    alert("Item Added To Cart")
  }

  GetDetails(product: Product){
    this.router.navigate(['/product-details'], {state: {details: product}})
  }
}
