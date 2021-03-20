import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
    
  }


  gotoStore(){
    this.router.navigate(['Store']);
  }

  gotoHome(){
    this.router.navigate(['']);
  }

  gotoAddArticle(){
    this.router.navigate(['AddArticle']);
  }

  gotoArticleList(){
    this.router.navigate(['ArticleList']);
  }



}
