import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  details: any;
  constructor(private router: Router, private cartService: CartService) {
          this.details = this.router.getCurrentNavigation()?.extras.state;
          debugger
   }

  ngOnInit(): void {
  }

  AddToCart(product: Product){
    this.cartService.AddProductToCart(product)
    alert("Item Added To Cart")
  }

}
