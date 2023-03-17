import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Diadiem} from '../model/diadiem';

@Injectable({
  providedIn: 'root'
})
export class DiadiemService {
  API = 'http://localhost:3000/diadiems';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Diadiem[]> {
    return this.httpClient.get<Diadiem[]>(this.API);
  }
}
