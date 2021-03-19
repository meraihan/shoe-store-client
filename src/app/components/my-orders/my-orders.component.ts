import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  gotoAddress(){
    this.router.navigate(['MyAddress']);
  }

  gotoProfile(){
    this.router.navigate(['MyProfile']);
  }

  gotoLogin(){
    this.router.navigate(['MyAccount']);
  }


  gotoMyOrders(){
    this.router.navigate(['MyOrders']);
  }
}
