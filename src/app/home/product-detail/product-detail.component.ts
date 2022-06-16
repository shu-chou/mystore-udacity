import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id: string = '';
  product = <Product>{};
  rating: number = 0;
  isFetchingProduct: boolean = true;
  error: boolean = false;
  width: string = '10%';
  constructor(private route: ActivatedRoute, private service: HomeService) {}

  ngOnInit(): void {
    console.log(this.isFetchingProduct);
    this.id = this.route.snapshot.params['id'];
    this.width = '40%';
    this.service.getProductDetail(this.id).subscribe((data) => {
      if (data== null){
         this.error = true;
      }else {
        this.product['id'] = data.id;
        this.product['title'] = data.title;
        this.product['description'] = data.description;
        this.product['category'] = data.category;
        this.product['price'] = data.price;
        this.rating = data.rating.rate;
        this.product.image = data.image;
        this.width = '100%';
      }
      this.isFetchingProduct = false;
    });
  }
  
  updateWidth() {
    return this.width;
  }

  addToCart(product: Product): void {
    this.service.addCartItems(product);
  }
}
