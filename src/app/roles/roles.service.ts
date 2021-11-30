import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { take } from 'rxjs/operators';
import { Role } from './entities/role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private http : HttpClient
  ) { }

  fetchRoles() : Promise<Array<Role>>{
    return this.http.get<Array<Role>>(`${environment.apiUrl}/roles`).pipe(take(1)).toPromise();
  }
}
