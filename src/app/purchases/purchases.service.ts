import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Purchase } from './entities/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(
    private http : HttpClient
  ) { }

  fetchPurchases() : Promise<Array<Purchase>>{
    return this.http.get<Array<Purchase>>(`${environment.apiUrl}/purchases`).pipe(take(1)).toPromise();
  }
}
