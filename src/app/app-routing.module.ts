import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { CaseComponent } from './component/case/case.component';
import { ComputerComponent } from './component/computer/computer.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { RamComponent } from './component/ram/ram.component';
import { StorageComponent } from './component/storage/storage.component';


const routes: Routes = [
  {
    path: 'case',
    component: CaseComponent
  },
  {
    path: 'ram',
    component: RamComponent
  },
  {
    path: 'storage',
    component: StorageComponent
  },
  {
    path: 'computer',
    component: ComputerComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path:'product-details',
    component: ProductdetailsComponent
  },
  {
    path:'*',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
