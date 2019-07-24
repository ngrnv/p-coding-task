import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaginationInfo } from 'src/interfaces/pagination';
import { pick } from 'ramda';
import { User } from 'src/interfaces';
import { UsersStoreService } from '../../../core/store/users-store.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  usersList$: Observable<User[]>;
  paginationInfo$: Observable<PaginationInfo>;
  pagesCount: number;

  constructor(private activatedRoute: ActivatedRoute,
              private userStore: UsersStoreService,
              private router: Router) {
  }

  ngOnInit() {

    this.usersList$ = this.activatedRoute.data.pipe(
      map(data => data.users.data)
    );

    this.paginationInfo$ = this.activatedRoute.data.pipe(
      map(data => pick(['total_pages', 'per_page', 'total', 'page'], data.users))
    );

  }

  pageChanged(event: PageEvent): void {
    this.router.navigate(['./'], { queryParams: { page: event.pageIndex + 1 } });
  }

  userSelected(user: User): void {
    this.router.navigate(['./user', user.id]);
    this.userStore.selectedUser$.next(user);
  }
}
