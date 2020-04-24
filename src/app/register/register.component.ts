import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { 
    this.user ={
      idUser : null,
      username: null,
      password: null,
      creation_date : null
    }
  }

  ngOnInit(): void {
  }

  userSave(){
    this.userService.saveUser(this.user).subscribe(
      data=>{
        console.log(data);
      }
    );
  }

}
