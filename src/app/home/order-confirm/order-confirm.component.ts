import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {
  confirmed: boolean = false;
  width: string = '25%';
  constructor(private router: Router, private service: HomeService) { }

  ngOnInit(): void {
 setTimeout(() => {
    this.width = '50%';
    setTimeout(() => {
      this.width = '100%';
      setTimeout(() => {
        this.confirmed = true;
        setTimeout(() => {
           this.service.emptyCart();
           this.router.navigate(['']);
        }, 2000);
      }, 1000);
    }, 2000);
 }, 3000);
  

}
  
  updateWidth(){
    return this.width;
  }

}
