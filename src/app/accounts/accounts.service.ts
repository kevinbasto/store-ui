import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Account } from './entities/account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(
    private http : HttpClient
  ) { }

  fetchAccounts() : Promise<Array<Account>>{
    return this.http.get<Array<Account>>(`${environment.apiUrl}/accounts`).pipe(take(1)).toPromise();
  }
}
