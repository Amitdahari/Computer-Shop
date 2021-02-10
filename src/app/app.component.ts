import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-angular';

  constructor(private ProductsService: ProductsService){

  }
  ngOnInit(): void {
    this.ProductsService.GetAllProducts();
  }
  
}
