import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './home/cart/cart.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './home/notfound/notfound.component';
import { OrderConfirmComponent } from './home/order-confirm/order-confirm.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { ProductsComponent } from './home/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'order-confirm', component: OrderConfirmComponent },
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      { path: '**', component: NotfoundComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
