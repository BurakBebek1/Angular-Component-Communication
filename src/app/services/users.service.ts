import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http: HttpClient) { }

getUsers() {
  //return this.http.get('your-api');
  const users = [
    {id:1, name:'Burak'},
    {id:2, name:'Buğra'}
  ]

  return users;
}

}
