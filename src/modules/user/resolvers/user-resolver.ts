import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../../core/services';
import { UsersStoreService } from '../../core/store/users-store.service';
import { switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {

  constructor(private apiService: ApiService, private userStore: UsersStoreService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
    const userId: number = route.params.id;
    return this.userStore.selectedUser$.pipe(
      switchMap(user => {
        if (user) {
          console.log(`User ${userId} already fetched`);
          return of(user);
        } else {
          console.log(`Fetching user ${userId}`);
          return this.apiService.fetchUserById(userId);
        }
      }),
      take(1)
    );

  }

}
