import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { signUp, Login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class SellService {
  // https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient,private router: Router) { }

  //if data is posted then route use behaviorSubject
  usersignUp(data: signUp){
    return this.http.post('http://localhost:3000/seller',data,{observe: 'response'}).subscribe((result) => {
      if(result){
        localStorage.setItem('seller',JSON.stringify(result))
        this.router.navigate(['seller-home'])
      }
    })
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }

  userLogin(data: Login){
    console.log(data.name)
    this.http.get('http://localhost:3000/seller?name=${data.name}email=${data.email}&password=${data.password}',{observe:'response'}).subscribe((result: any) => {
        this.isLoginError.emit(true)
    })
  }



}
