import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CreateProduct } from './dtos/create-product';
import { UpdateProduct } from './dtos/update-product';
import { Product } from './entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http : HttpClient
  ) { }

  createProduct(product: CreateProduct) {
    return this.http.post(`${environment.apiUrl}/products`, product).pipe(take(1)).toPromise();
  }

  fetchProducts() : Promise<Array<Product>>{
    return this.http.get<Array<Product>>(`${environment.apiUrl}/products`).pipe(take(1)).toPromise();
  }

  fetchProduct(id : string) : Promise<Product>{
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`).pipe(take(1)).toPromise();
  }

  updateProduct(id : string, product : UpdateProduct){
    return this.http.patch(`${environment.apiUrl}/products/${id}`, product).pipe(take(1)).toPromise();
  }

  deleteProduct(id : string){
    return this.http.delete(`${environment.apiUrl}/products/${id}`).pipe(take(1)).toPromise();
  }
}
