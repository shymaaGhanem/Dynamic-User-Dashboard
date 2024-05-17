import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

baseUrl:string=`https://reqres.in/api/users/`;

  constructor(private http:HttpClient) { }
  
  getAllUsers(page?:number):Observable<Users[]>{
  return  this.http.get<Users[]>(`${this.baseUrl}?page=${page}`)
  }
  
  getUsersDetails(id:any):Observable<Users[]>{
  return  this.http.get<Users[]>(`${this.baseUrl}${id}`)
  }
  
}
