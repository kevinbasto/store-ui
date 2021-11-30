import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Transaction } from './entities/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    private http : HttpClient
  ) { }

  fetchTransactions() : Promise<Array<Transaction>>{
    return this.http.get<Array<Transaction>>(`${environment.apiUrl}/transactions`).pipe(take(1)).toPromise();
  }
}
