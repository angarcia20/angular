import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { 

  }
  AllPost(){
    return this.http.get('http://localhost:3000/post'); 
  }

  deletePost(userdelete){
    return this.http.delete('http://localhost:3000/post/'+userdelete);

  }
  savePost(user){
    return this.http.post('http://localhost:3000/post/',user);

  }
  


}

