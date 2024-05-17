import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../interface/users';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users:Users[],searchval?:any): Users[] {
  console.log(users)
    return users?.filter((el)=>{
    return el.first_name.toLowerCase().includes(searchval?.toLowerCase())
    });
  }

}
