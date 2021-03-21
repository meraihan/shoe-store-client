import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './Product';
import * as productDetails from '../../../assets/json/productDetails.json';
import { Observable } from "rxjs";


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit{

  constructor(private router: Router) { }
   products: Product[];
  // products: any = (productDetails as any).default;

  ngOnInit(){
    console.log(productDetails);
    
    this.reloadData();
  }

  reloadData(){
     this.products = (productDetails as any).default;
    // products: Product[] = productDetails;
  }

  articleDetail(){
      this.router.navigate(['ArticleDetails']);
  }
  
}
