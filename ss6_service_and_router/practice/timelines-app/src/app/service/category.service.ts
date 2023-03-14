import { Injectable } from '@angular/core';
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API = 'http://localhost:3000/categories';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API)
  }

  saveCategory(category): Observable<Category> {
    return this.httpClient.post<Category>(this.API, category);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.API}/${id}`);
  }

  updateCategory(id: number, category: Category) {
     return this.httpClient.put<Category>(`${this.API}/categories/${id}`, category);
  }

  deleteCategory(id: number) {
    return this.httpClient.delete<Category>(`${this.API}/categories/${id}`);
  }
}
