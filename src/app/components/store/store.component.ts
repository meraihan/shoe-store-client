import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './Product';
import * as productDetails from '../../../assets/json/productDetails.json';
import { Observable } from "rxjs";
import {CatalogService } from '../../_services/catalog.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit{

  constructor(private router: Router) { }
   // products: string[];

  ngOnInit(){
    this.reloadData();
  }


  reloadData(){
  }

  articleDetail(){
      this.router.navigate(['ArticleDetails']);
  }
  
}
