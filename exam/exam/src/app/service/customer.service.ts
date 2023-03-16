import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API = 'http://localhost:3000/customers';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API);
  }
  findById(): Observable<Customer> {
    return this.httpClient.get<Customer>();
  }
}
