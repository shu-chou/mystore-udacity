import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private service: HomeService, private router: Router) {}
  cartItems: Product[] = [];
  cartList: { id: number; quantity: number; price: number; title: string; image: string }[] =
    [];
  totalCartItems: number = 0;
  itemid: number = 1;
  itemquantity: number = 0;
  itemprice: number = 0;
  itemtitle: string = '';
  itemimage: string = '';
  totalcost: number = 0;
  cartSummary = <{ cost: number; quantity: number }>{};

  ngOnInit(): void {
    this.cartItems = this.fetchCartItems();
    console.log(this.cartItems);
    this.totalCartItems = this.cartItems.length;
    this.createCartList();
    this.itemCost();
    this.cartSummary = {
      cost: this.totalcost,
      quantity: this.totalCartItems,
    };
  }

  createCartList() {
    let index;
    let id;
    for (index in this.cartItems) {
      id = this.cartItems[index]['id'];
      // console.log('ID='+id);

      if (id == this.itemid) {
        this.itemprice = this.cartItems[index]['price'];
        this.itemtitle = this.cartItems[index]['title'];
        this.itemimage = this.cartItems[index]['image'];
        this.itemquantity++;
      } else {
        this.cartList.push({
          id: this.itemid,
          quantity: this.itemquantity,
          price: this.itemprice,
          title: this.itemtitle,
          image: this.itemimage
        });
        this.itemquantity = 0;
        this.itemid = id;
        this.itemquantity++;
      }
    }
    this.cartList.push({
      id: this.itemid,
      quantity: this.itemquantity,
      price: this.itemprice,
      title: this.itemtitle,
      image: this.itemimage
    });
    console.log(this.cartList);
  }

  itemCost() {
    for (let index in this.cartList) {
      this.totalcost =
        this.totalcost +
        this.cartList[index]['quantity'] * this.cartList[index]['price'];
    }
  }

  fetchCartItems() {
    return this.service.getCartItems();
  }

  checkout(value: string){
      if(value == 'true'){
        this.router.navigate(['/checkout']);
      }
  }
}
