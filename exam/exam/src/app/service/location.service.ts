import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }
    findAll(): Observable<Address[]> {
    return this.httpClient.get<Address[]>('http://localhost:8080/address/list');
  }
}
