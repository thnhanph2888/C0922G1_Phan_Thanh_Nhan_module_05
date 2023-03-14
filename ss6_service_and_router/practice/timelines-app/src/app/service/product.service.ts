import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API);
  }

  saveProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(this.API, product);
  }

  update(id: number, productUpdate: Product): Observable<Product>{
      return this.httpClient.put<Product>(this.API + '/' + id, productUpdate);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API + '?id=' + id);
  }

  delete(id: number): Observable<Product>{
    return this.httpClient.delete<Product>(this.API + '/' + id);
  }
}
