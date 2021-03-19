import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent implements OnInit {

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
