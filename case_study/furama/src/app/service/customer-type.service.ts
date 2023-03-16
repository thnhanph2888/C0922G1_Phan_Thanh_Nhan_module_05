import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../model/customer-type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  API = 'http://localhost:3000/customerTypes';
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API);
  }
}
