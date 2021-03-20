import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../../_services/catalog.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})

export class AddArticleComponent implements OnInit{

  form: any = {};
  errorMessage='';
  constructor(private router: Router) { }

  ngOnInit(){

  }

  /*
  this.form = {
    "id": 30,
    "title": "Product name",
    "description": "prodotto desc",
    "picture": "../../assets/image/05.png",
    "price": "100",
    "stock": "30",
    "sizes": "30, 31, 32",
    "brands": "Nike, Puma",
    "categories": "Man, Sport"
  }; */
  
  /*
  onSubmit(){
    this.catalogService.addProduct(this.form).subscribe(
      data =>{
        this.router.navigate(['ArticleList']);
        this.reloadData();
      },
      err =>{
        this.errorMessage = err.error.message;
      }
    );
  }
*/

  gotoAddArticle(){
    this.router.navigate(['AddArticle']);
  }

  gotoArticleList(){
    this.router.navigate(['ArticleList']);
  }


  editProduct(){
    /*
    this.catalogService.editProduct(this.form).subscribe(
      data =>{
        this.router.navigate(['ArticleList'])
          .then(() => {
            window.location.reload();
          });
      },
      err =>{
        this.errorMessage = err.error.message;
      }
    ); */
  }

  gotoStore(){
    this.router.navigate(['Store']);
  }


  gotoHome(){
    this.router.navigate(['']);
  }

  reloadData(){
   
  }
}
