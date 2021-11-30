import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../entities/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productForm : FormGroup;
  private productId : string;
  private product : Product

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private productsService : ProductsService
  ) {
    this.productForm = this.fb.group({
      name : [""],
      description: [""],
      price : [""],
      picture: [""]
    })
  }

  ngOnInit(): void {
    this.productId = this.router.url.split("/")[this.router.url.split("/").length - 1];
    if(this.productId != "new"){
      this.productsService.fetchProduct(this.productId)
      .then((result) => {
        this.product = result;
        this.setProductValues();
      }).catch((err) => {
        
      });
    }
  }

  setProductValues(){
    this.productForm.get('name').setValue(this.product.name);
    this.productForm.get('description').setValue(this.product.description);
    this.productForm.get('price').setValue(this.product.price);
    this.productForm.get('picture').setValue(this.product.picture);
  }

  goBack(){
    this.router.navigate([`/products`])
  }

  deleteProduct(){
    if(this.productId != "new")
      this.productsService.deleteProduct(this.productId)
      .then((result) => {
        this.router.navigate(['/products'])
      }).catch((err) => {
        
      });
  }

  submit(){
    let productData = this.productForm.value;
    if(this.productId != "new"){
      this.productsService.updateProduct(this.productId, productData)
      .then((result) => {
        this.router.navigate(['/products'])
      }).catch((err) => {
        
      });
    }else{
      this.productsService.createProduct(productData)
      .then((result) => {
        this.router.navigate(['/products'])
      }).catch((err) => {
        
      });
    }
  }
}
