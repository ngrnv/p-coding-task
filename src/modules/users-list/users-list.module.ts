import { NgModule } from '@angular/core';
import { UsersResolver } from './resolvers';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    SharedModule,
    UsersListRoutingModule,
  ],
  providers: [
    UsersResolver,
  ]
})
export class UsersListModule {
}
