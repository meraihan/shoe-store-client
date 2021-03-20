import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/catalog-service/product/'; // add



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class CatalogService{

  constructor(private http: HttpClient) { }



  addProduct(msgData): Observable<any> {
    return this.http.post(AUTH_API + 'add', {
      title: msgData.title,
      description: msgData.description,
      picture: msgData.picture,
      price: msgData.price,
      stock: msgData.stock,
      sizes: msgData.sizes,
      brands: msgData.brands,
      categories: msgData.categories
    }, httpOptions);
  }


  editProduct(msgData): Observable<any>{
    return this.http.put(AUTH_API + 'edit',{
      id: msgData.id,
      title: msgData.title,
      description: msgData.description,
      picture: msgData.picture,
      price: msgData.price,
      stock: msgData.stock,
      sizes: msgData.sizes,
      brands: msgData.brands,
      categories: msgData.categories
    }, httpOptions);
  }



}
