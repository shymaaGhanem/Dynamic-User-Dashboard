import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgxPaginationModule} from 'ngx-pagination';
import { CardUserComponent } from './card-user/card-user.component';
import { SubLoaderComponent } from './sub-loader/sub-loader.component';


@NgModule({
  declarations: [
    AllUsersComponent,
    SearchPipe,
    CardUserComponent,
    SubLoaderComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MatFormFieldModule, MatInputModule,
    NgxPaginationModule,
  ],
  exports:[
    SubLoaderComponent,
  ]
})
export class UserModule { }
