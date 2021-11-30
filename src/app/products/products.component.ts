import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './entities/product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public tableHeaders = ["productId", "name", "description", "price", "picture"]
  public products : Array<Product>;
  public error : any;

  constructor(
    private productsService : ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsService.fetchProducts()
    .then((result) => {
      console.log(result);
      this.products = result;
    }).catch((err) => {
      this.error = err;
    });
  }

  createProduct(){
    this.router.navigate(['/products/new']);
  }
}
