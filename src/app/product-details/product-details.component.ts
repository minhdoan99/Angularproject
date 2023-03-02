import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productData : undefined | product
  productQuantity: number = 1;
  constructor(private route: ActivatedRoute,private product: ProductService){

  }
  ngOnInit(){
    let productId = this.route.snapshot.paramMap.get('productid')
    console.log(productId)
    if(productId){
      this.product.getProduct(productId).subscribe((result) => {
          console.log(result)
          this.productData = result
          console.log(this.productData)
      })
    }
  }
  handleQuantity(val:string){
    if(this.productQuantity < 20 && val==="plus"){
      this.productQuantity+=1
    }
    else if(this.productQuantity > 1 && val==="min"){
      this.productQuantity-=1
    }
  }

}
