import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User;


  constructor(private userService: UserService, private _snackBar: MatSnackBar) {
    this.user ={
      idUser : null,
      username: null,
      password: null,
      creation_date : null
    }
   }

  ngOnInit(): void {

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  login(){
    console.log(this.user);
    this.userService.loginUser(this.user).subscribe(
      data=>{
        if(data == null){
          this.openSnackBar('USUARIO NO ENCONTRADO', '');
        }else{
          this.openSnackBar('USUARIO CORRECTO', '');
        }
      }
    );
  }
}
