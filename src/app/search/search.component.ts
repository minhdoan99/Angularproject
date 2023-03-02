import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from "../data-type";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  productList : undefined | product[]
  searchResult : undefined | product[]
  constructor(private activeRoute: ActivatedRoute,private product:ProductService){

  }

  ngOnInit(): void {
      let query = this.activeRoute.snapshot.paramMap.get('query')
      console.log(query)
      if(query){
        this.product.searchProducts(query).subscribe((result) => {
          this.searchResult = result
        })
      }
  }


}
