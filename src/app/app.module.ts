import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { CaseComponent } from './component/case/case.component';
import { RamComponent } from './component/ram/ram.component';
import { StorageComponent } from './component/storage/storage.component';
import { ComputerComponent } from './component/computer/computer.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CaseComponent,
    RamComponent,
    StorageComponent,
    ComputerComponent,
    CartComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
