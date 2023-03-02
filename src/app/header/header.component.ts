import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from '../services/product.service';
import { product } from '../data-type'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  showMenu = true;
  showUl: string = 'default';
  sellerName: string="";
  searchResult: undefined | product[];
  userName : string =""
  constructor(private route: Router,private product:ProductService){

  }

  ngOnInit(): void {
    console.log('on init')

    this.route.events.subscribe((val:any) => {
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          let sellerStore = localStorage.getItem('seller');
          let sellerData = (sellerStore !== null ? JSON.parse(sellerStore) : null)
          this.sellerName = sellerData.body.name

          this.showMenu = true;
          this.showUl = 'change';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user')
          let userData = userStore && JSON.parse(userStore)
          this.userName = userData.name
          this.showMenu = true
          this.showUl = 'user'
        }
        else{
          console.warn('outside to seller area')
          this.showMenu = false;
          this.showUl = 'default';
        }
      }
    })
  }

  //2.Logout and seller pages
  /*
    1. Add Logout feature
    2. Display Seller Name
    3. Make Component for add product
    4. Add routing for Product Pages
    5. Apply Auth on Product Route Pages
    6. Check Flow
  */
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }
  userLogout(){
    localStorage.removeItem('user')
    this.route.navigate(['/user-auth'])
  }

  //3.Auto suggestion search
  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement
      console.warn(element.value)
      this.product.searchProducts(element.value).subscribe((result) => {
        if(result){
          this.searchResult = result;
          console.log(result)
        }
      })
    }
  }

  hideSearch(){
    this.searchResult = undefined
  }

  submitSearch(data:string){
    this.route.navigate([`search/${data}`])
  }
  redirectToDetails(id:number){
    console.warn('redirect')
    this.route.navigate([`/details/${id}`])
  }

}
