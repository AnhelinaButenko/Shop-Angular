import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CartPageComponent} from "./cart-page/cart-page.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
