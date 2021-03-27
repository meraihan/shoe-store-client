import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../_services/auth-service.service';
import {Router} from '@angular/router';
import {TokenStorageService } from '../../_services/token-storage.service';
import { ViewChild,ElementRef } from '@angular/core'

// https://technicaaadda.blogspot.com/2020/04/code-for-social-login.html
// https://www.youtube.com/watch?v=S4rzmjuZWzI



@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})


export class MyAccountComponent implements OnInit {

  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  
  auth2:any;
  form: any = {};
  isSuccessful = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor( private router: Router) { }

  ngOnInit(){
    this.googleInitialize();
  }


  googleInitialize() {
    window['googleSDKLoaded'] = () =>{
      window['gapi'].load('auth2', () =>{
        this.auth2 = window['gapi'].auth2.init({
          client_id: '692072137787-7k2labjkfj2uvbt47k4ootvj3iil6n61.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  gotoAdmin(){
    this.router.navigate(['AdminHome']);
  }
  
  gotoProfile(){
    this.router.navigate(['MyProfile']);
  }

  reloadPage() {
    window.location.reload();
  }
}
