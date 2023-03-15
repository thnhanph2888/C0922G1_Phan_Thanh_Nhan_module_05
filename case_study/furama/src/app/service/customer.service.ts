import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API = 'http://localhost:3000/customers';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API + '?id=' + id);
  }

  add(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API, customer);
  }

  edit(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.API + '/' + id, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API + '/' + id);
  }
}
