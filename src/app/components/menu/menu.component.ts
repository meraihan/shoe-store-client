import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoStore(){
    this.router.navigate(['Store']);
  }


  
  gotoShoppingCart(){
    this.router.navigate(['ShoppingCart']);
  }


  gotoMyAccount(){
    this.router.navigate(['MyAccount']);
  }

  gotoAdmin(){
    this.router.navigate(['AdminHome']);
  }

}
