import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/interfaces';

/**
 * Bette would be to use state mgmt framework for that, but since there is not so much time...
 */
@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {

  selectedUser$ = new BehaviorSubject<User>(null);

  constructor() {
  }
}
