import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Product } from './entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http : HttpClient
  ) { }

  fetchProducts() : Promise<Array<Product>>{
    return this.http.get<Array<Product>>(`${environment.apiUrl}/products`).pipe(take(1)).toPromise();
  }
}
