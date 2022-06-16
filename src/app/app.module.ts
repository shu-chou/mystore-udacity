import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { CartComponent } from './home/cart/cart.component';
import { CartSummaryComponent } from './home/cart/cart-summary/cart-summary.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { OrderConfirmComponent } from './home/order-confirm/order-confirm.component';
import { NotfoundComponent } from './home/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    CartSummaryComponent,
    CheckoutComponent,
    OrderConfirmComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
