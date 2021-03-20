import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})


export class ArticleListComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() {
  }


  gotoAddArticle(){
    this.router.navigate(['AddArticle']);
  }

  gotoArticleList(){
    this.router.navigate(['ArticleList']);
  }

  gotoStore(){
    this.router.navigate(['Store']);
  }


  gotoHome(){
    this.router.navigate(['']);
  }

}
