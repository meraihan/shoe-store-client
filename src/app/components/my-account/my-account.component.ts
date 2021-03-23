import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../_services/auth-service.service';
import {Router} from '@angular/router';
import {TokenStorageService } from '../../_services/token-storage.service';

// https://technicaaadda.blogspot.com/2020/04/code-for-social-login.html

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})


export class MyAccountComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor( private router: Router) { }

  ngOnInit() {
    this.form = {
      "firstName": "Mike",
      "lastName": "Ross",
      "email": "mike@test.com",
      "password": "123"
    };
  }
/*
  signUp(){
    this.authService.register(this.form).subscribe(
      res => this.router.navigate(['']),
      err => console.log(console.log(err.error.message), alert(''+err.error.message))
    );   
  }


  onSubmit(){
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        sessionStorage.setItem('loggedUser', data.username);
        this.router.navigate(['adminHome']);        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;        
      }
    );
  }
*/

  gotoProfile(){
    this.router.navigate(['MyProfile']);
  }

  reloadPage() {
    window.location.reload();
  }
}
