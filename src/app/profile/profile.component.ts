import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { User } from '../models/user';
import { Tweet } from '../models/tweet.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  tweet: Tweet;
  post= [];
  idUser = [];
  usuarios=[];
  username = "";
  panelOpenState = false;
  fecha : Date;
  mensaje = "";
  id: number;


  constructor(private router: Router, private route: ActivatedRoute,private userService: UserService,
    private postService: PostService,private _snackBar: MatSnackBar) {this.allPost() 
      this.user ={
        idUser : null,
        username: null,
        password: null,
        creation_date : null
      }
      this.tweet={
        idUser: null,
        message : null,
        published_date : this.fecha,
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

deletePost(userdelete){
  this.postService.deletePost(userdelete).subscribe(
    user=>{
    if(user == 0){
      this.openSnackBar('TWEET NO ELIMINADO', '');
    }else{
      this.openSnackBar('TWEET ELIMINADO CORRECTAMENTE', '');
    }
    }
  );


}

openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
createPost(id: string){
  console.log("esta es", this.id);
  this.userService.getByUserName(id).subscribe(
    data=>{
        this.idUser[0]=data;
        console.log("USER", this.idUser);
        console.log("ID", this.idUser[0].idUser);
        this.fecha=new Date;

        this.tweet={
          idUser: this.idUser[0].idUser,
          message : this.mensaje,
          published_date : this.fecha,
        }
          console.log(this.mensaje);
          console.log(this.fecha);
          console.log("tweet",this.tweet);
          this.postService.savePost(this.tweet).subscribe(
            data=>{
              console.log(data);
            }
          );
    }
  );
}
}
