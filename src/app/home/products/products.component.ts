import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isFetching: boolean = true;
  error: boolean = false;
  width: string = '10%';
  @Output() addedItem = new EventEmitter<number>();
  constructor(private service: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.width = '40%';
    this.service.getProducts().subscribe((data) => {
      for (var i = 0; i < data.length; i++) {
        this.products.push({
          id: data[i]['id'],
          title: data[i]['title'],
          price: data[i]['price'],
          image: data[i]['image'],
          rating: {
            rate: data[i]['rating']['rate'],
            count: data[i]['rating']['count'],
          },
          category: data[i]['category'],
          description: data[i]['description'],
        });
      }
      this.isFetching = false;
    });
  }
  
  updateWidth(){
    return this.width;
  }
  
  openProduct(id: number): void {
    this.router.navigate(['/product-detail/' + id]);
  }

  addToCart(product: Product): void {
    this.service.addCartItems(product);
  }
}
