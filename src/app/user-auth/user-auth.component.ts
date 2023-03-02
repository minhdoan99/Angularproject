import { Component,OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { UserService } from '../services/user.service';
import { Login } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit{
  showUser: boolean = true;
  constructor(private user: UserService,private route: Router){

  }
  ngOnInit(){

  }
  signUp(data: signUp){
    console.warn(data)
    this.user.userSignUp(data)
  }
  Login(data:Login){
    console.log(data)
    this.user.userLogin(data)
  }
  openLogin(){
    this.showUser = !this.showUser
  }
  openSignUp(){
    this.showUser =  !this.showUser
  }

}
