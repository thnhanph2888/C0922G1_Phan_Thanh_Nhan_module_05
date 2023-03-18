import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class DiadiemService {
  API = 'http://localhost:3000/diadiems';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(this.API);
  }
}
