import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../model/Facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  API = 'http://localhost:3000/facilities';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.API);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(this.API + '?id=' + id);
  }

  add(facility: Facility): Observable<Facility> {
    return this.httpClient.post<Facility>(this.API, facility);
  }

  edit(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(this.API + '/' + id, facility);
  }

  delete(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(this.API + '/' + id);
  }
}
