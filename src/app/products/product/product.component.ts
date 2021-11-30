import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productForm : FormGroup;

  constructor(
    private fb : FormBuilder
  ) {
    this.productForm = this.fb.group({
      name : [""],
      description: [""],
      price : [""],
      picture: [""]
    })
  }

  ngOnInit(): void {
  }

}
