
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeService } from '../../home.service';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  @Input() summary = <{ cost: number; quantity: number }>{};
  @Output() checkout = new EventEmitter<string>();
  shipping: number = 0;
  discount: number = 0;
  tax: number = 0;
  constructor(private service: HomeService) {}

  ngOnInit(): void {
  }

  calculateDiscount(): number{
    if (this.summary.quantity >= 10){
       this.discount = 5;
    }
    return this.discount;
  }

  calculateShipping(): number{
    if (this.summary.quantity < 5){
      this.shipping = 5;
    }
      return this.shipping;
  }
  roundItemCost(){
    return this.summary.cost.toFixed(2);
  }
  calculateRoundedTax(){
    return ((5*this.summary.cost)/100).toFixed(2);
  }

  calculateTax(){
    return ((5*this.summary.cost)/100);
  }
   
  calculateTotal(){
    return (this.summary.cost + this.calculateTax() + this.shipping - this.discount).toFixed(2);
  }

  proceedCheckout(){
      let total = Number(this.calculateTotal());
      let tax = Number(this.calculateRoundedTax());
      this.service.setCartSummary(total, tax, this.shipping, this.discount, this.summary.quantity, this.summary.cost);
      this.checkout.emit('true');
  }
}
