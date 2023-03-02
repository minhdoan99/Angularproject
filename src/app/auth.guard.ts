import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,of } from 'rxjs';
import { SellService } from './services/sell.service'

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthGuard implements CanActivate {

  constructor(private sellerService: SellService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return of(true);
  }


}
//tư tưởng của router là khi route đến path đó thì sẽ render component đó
//vậy để render được thì cần đặt component đó ở routeroutlet để
// có thể render được tới component đó

/*
1: Cách lấy URL parameter: Snapshot,params,param
this.route.params.subscribe(console.log)
this.route.paramMap.subscribe(console.log)
console.log(this.route.snapshot.params)
console.log(this.route.snapshot.paramMap)

*/

