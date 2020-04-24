import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  listaTweets = [] ;

  constructor(private postService: PostService,  private userService: UserService, private router: Router) { 
    this.AllPost();
    this.listaTweets = [] ;
  }

  ngOnInit(): void {
  }

  AllPost(){
    this.postService.AllPost().subscribe(
      data=>{
        this.listaTweets =data['data'];
        console.log(data);
        console.log(this.listaTweets);
      for(let i=0 ; i<this.listaTweets.length ; i++){
          this.userService.findOneUser(this.listaTweets[i].idUser).subscribe
          (
            data=>{
              this.listaTweets[i].idUser = data;
              this.listaTweets[i].idUser = this.listaTweets[i].idUser.username;
            }
          );
        }
      }
    );
  }

  profile(username: string){
      this.router.navigate(["/profile", username]);
  }


}
