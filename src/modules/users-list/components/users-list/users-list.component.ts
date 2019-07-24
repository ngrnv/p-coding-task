import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../../interfaces';
import { Observable } from 'rxjs';
import { PaginationInfo } from 'src/interfaces/pagination';
import { pick } from 'ramda';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  usersList$: Observable<UserInterface[]>;
  paginationInfo$: Observable<PaginationInfo>;
  pagesCount: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.usersList$ = this.activatedRoute.data.pipe(
      map(data => data.users.data)
    );

    this.paginationInfo$ = this.activatedRoute.data.pipe(
      map(data => pick(['total_pages', 'per_page', 'total', 'page'], data.users))
    );

    // this.userList$ = this.activatedRoute.data.pipe(
    //   map(data => data.users)
    // );

    // this.activatedRoute.data.pipe(
    //   map(data => data.paginationInfo)
    // )
    //   .subscribe(paginationInfo => {
    //     this.pagesCount = paginationInfo.total;
    //   });
  }

  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
