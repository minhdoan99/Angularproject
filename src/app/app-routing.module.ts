import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import './seller-update-product/seller-update-product.component.css';
import {
  SellerUpdateProductComponent
} from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: SellerAuthComponent,
    path: 'seller-auth'
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-add-product',
    component: SellerAddProductComponent,
    data:{
      feature: 'articles',
      permissions: 'articles-read'
    },
    canActivate: [AuthGuard]
  },
  {
    component: SellerUpdateProductComponent,
    path: 'seller-update-product/:id',
    canActivate: [AuthGuard]
  },
  {
    component: SearchComponent,
    path: 'search/:query',
    canActivate: [AuthGuard]
  },
  {
    component: ProductDetailsComponent,
    path: 'details/:productid'
  },
  {
    component: UserAuthComponent,
    path: 'user-auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
