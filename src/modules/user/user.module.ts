import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserComponent, UserDataComponent],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
