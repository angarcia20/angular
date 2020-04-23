import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { User } from '../models/user';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  post= [];
  postuser=[];
  username = "";


  constructor(private router: Router, private route: ActivatedRoute,private userService: UserService,
    private postService: PostService) {this.allPost() 
      this.user ={
        id : null,
        username: null,
        password: null,
        creation_date : null
      }
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
        this.userService.getByUserName(params.get("id")).subscribe(
          user=>{
            this.user = user; 
            this.username = this.user.username;
          }
        )
    });

  }

  allPost(){
    this.postService.AllPost().subscribe(
      posta=>{
        this.post=posta['data'];
        for(let i=0 ; i<this.post.length ; i++){
          this.userService.findOneUser(this.post[i].idUser).subscribe
          (
            data=>{
              this.post[i].idUser = data;
              this.post[i].idUser = this.post[i].idUser.username;
              
            }
          );
        }
      }
    );
  }

}
