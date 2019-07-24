import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/interfaces';

/**
 * Would be better to use state mgmt framework for that, but since there is not so much time...
 * Also, just selected user is stored. Potentially pagination object and user list could be managed.
 */
@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {

  selectedUser$ = new BehaviorSubject<User>(null);

  constructor() {
  }
}
