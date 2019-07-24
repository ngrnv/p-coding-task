import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserInterface } from '../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaginatedApiResponse } from 'src/interfaces/pagination';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {
  }

  fetchUsers(page): Observable<PaginatedApiResponse<User>> {
    return this.http.get<PaginatedApiResponse<User>>(`${environment.APIS.USER}/users?page=${page}`);
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`https://reqres.in/api/users/${id}`);
  }

}
