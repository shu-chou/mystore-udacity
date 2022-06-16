import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  strPattern = "[a-zA-Z ]*";
  phoneNumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  
  summary = <{quantity: number, shipping: number, tax: number, discount: number, cost: number, total: number}>{};
  constructor(private service: HomeService, private router: Router) { }

  ngOnInit(): void {
      this.summary = this.service.getCartSummary();
  }

  roundCost(){
    return this.summary.cost.toFixed(2);
  }

  roundedTotal(){
    return this.summary.total.toFixed(2);
  }

  onSubmit(form: NgForm){
      if(form.valid){
         this.router.navigate(['/order-confirm']);
      }
  }

}
