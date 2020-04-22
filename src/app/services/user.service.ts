import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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







}
