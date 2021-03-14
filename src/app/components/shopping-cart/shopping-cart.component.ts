import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(){
    $(function(){
      
    });
  }


  gotoCheckOut(){
    this.route.navigate(['Checkout']);
  }

  gotoStore(){
    this.route.navigate(['Store']);
  }

}
