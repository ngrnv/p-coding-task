import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse, PaginatedApiResponse } from 'src/interfaces/pagination';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {
  }

  fetchUsers(page): Observable<PaginatedApiResponse<User>> {
    return this.http.get<PaginatedApiResponse<User>>(`${environment.APIS.USER}/users?page=${page}`);
  }

  fetchUserById(id: number): Observable<User> {
    return this.http.get<ApiResponse<User>>(`${environment.APIS.USER}/users/${id}`).pipe(map(res => res.data));
  }

}
