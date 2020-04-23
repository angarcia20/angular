import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }
  saveUser(user){
   return this.http.post('http://localhost:3000/users/',user);
  }

  loginUser(user){
    return this.http.post('http://localhost:3000/users/login', user);
  }

  getByUserName(username): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users/username/'+ username);
  }
  findOneUser(id){
    return this.http.get('http://localhost:3000/users/'+ id);
  }
  getAllUsers(){
    return this.http.get('http://localhost:3000/users/');

  }







}
