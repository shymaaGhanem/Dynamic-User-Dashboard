import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent {
  userId!:string | null;
  userDetails:any;
  loading:boolean=true;
  
constructor(private service: UsersService,private _Activate: ActivatedRoute){
  this._Activate.paramMap.subscribe((param) => {
    this.userId = param.get('id');
  });
}

ngOnInit(): void {
 this.getDetails()
}

getDetails(){
this.service.getUsersDetails(this.userId).subscribe({
next:(data:any)=>{
this.userDetails = data.data;
this.loading = false;
}
})
}

}
