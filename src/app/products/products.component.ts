import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   products: any=[] 
  constructor(private ProductsService: ProductsService) {
    
   }

  ngOnInit(): void {
    this.ProductsService.GetAllProducts().subscribe(res =>{
            this.products = res
    })
  }

}