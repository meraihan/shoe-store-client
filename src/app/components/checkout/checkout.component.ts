import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
    $('#elemId').width();
  }

}
