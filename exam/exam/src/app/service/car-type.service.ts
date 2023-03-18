import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CarType} from '../model/car-type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<CarType[]> {
    return this.httpClient.get<CarType[]>('http://localhost:8080/api/caType/list');
  }
}
