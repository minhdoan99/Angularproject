import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp } from '../data-type';
import { Router } from '@angular/router';
import { Login } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private route: Router) { }
  userSignUp(user: signUp){
    this.http.post('http://localhost:3000/user', user, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body))
          this.route.navigate(['/'])
        }
      })
  }
  userLogin(user: Login){
    return this.http.get<signUp[]>(`http://localhost:3000/user?email=${user.email}&password=${user.password}`)
    .subscribe((result) => {
      if(result){
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result));
        this.route.navigate(['/'])
      }
    })
  }
}
