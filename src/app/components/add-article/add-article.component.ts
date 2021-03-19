import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){

  }


  gotoAddArticle(){
    this.router.navigate(['AddArticle']);
  }

  gotoArticleList(){
    this.router.navigate(['ArticleList']);
  }
}
