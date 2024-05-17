import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    UserModule,
  ]
})
export class DetailsModule { }
