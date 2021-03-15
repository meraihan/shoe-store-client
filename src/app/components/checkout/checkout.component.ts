import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    Feather.replace();
    $('#elemId').width();
  }

  gotoPlaceOrder(){
    this.router.navigate(['OrderSubmitted']);
  }

  onSubmit(): void {
    this.router.navigate(['OrderSubmitted']);
  }

}
