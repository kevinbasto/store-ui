import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http : HttpClient
  ) { }

  fetchUsers() : Promise<Array<User>>{
    return this.http.get<Array<User>>(`${environment.apiUrl}/users`).pipe(take(1)).toPromise();
  }
}
