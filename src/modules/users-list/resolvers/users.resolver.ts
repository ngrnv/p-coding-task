import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../../core/services';
import { Observable } from 'rxjs';
import { PaginatedApiResponse, User } from '../../../interfaces';

@Injectable()
export class UsersResolver implements Resolve<PaginatedApiResponse<User>> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<PaginatedApiResponse<User>> {
    const page: number = route.queryParams['page'] || 1;
    return this.apiService.fetchUsers(page);
  }

}
