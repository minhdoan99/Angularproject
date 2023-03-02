import { Component,OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';
import { Observable } from 'rxjs';
import { signUp,Login } from '../data-type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
  showLogin = false;
  authError: string='';
  constructor(private seller: SellService , private router: Router){

  }
  ngOnInit(): void{
    this.seller.reloadSeller()
  }

  signUp(data: signUp){
      // console.warn(data)
      console.log(data)
    this.seller.usersignUp(data)
  }

  Login(data: Login): void{
    console.log(data)
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError) => {
      if(isError){
        this.authError='Email or Password is not correct'
      }
    })
  }

  openLogin(){
    this.showLogin = true
    console.log(this.showLogin)
  }

  openSignUp(){
    this.showLogin = false
  }

}
