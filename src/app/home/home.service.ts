import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private cartItems: Product[] = [];
  private url = 'https://fakestoreapi.com/products';
  private cost = 0;
  private tax = 0;
  private shipping = 0;
  private discount = 0;
  private quantity = 0;
  private total = 0;
  constructor(private http: HttpClient) {}

  public emptyCart(){
      this.cartItems = [];
  }
  
  public getProducts() {
    return this.http.get<Product[]>(this.url);
  }

  public getProductDetail(id: string) {
    return this.http.get<Product>(this.url + '/' + id);
  }

  public addCartItems(product: Product) {
    this.cartItems.push(product);
  }

  public getCartItems() {
    return this.cartItems;
  }

  public getCartitemLength() {
    return this.cartItems.length;
  }

  public setCartSummary(total: number, tax: number, shipping: number, discount: number, quantity: number, cost: number){
        this.total = total;
        this.tax = tax;
        this.shipping = shipping;
        this.discount = discount;
        this.quantity = quantity;
        this.cost = cost;
  }

  public getCartSummary() {
        return ({
          cost: this.cost,
          tax: this.tax,
          shipping: this.shipping,
          discount: this.discount,
          quantity: this.quantity,
          total: this.total
        });
  }
}
