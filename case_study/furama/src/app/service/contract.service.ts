import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../model/Contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  API = 'http://localhost:3000/contracts';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API);
  }

  findById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(this.API + '?id=' + id);
  }

  add(contract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>(this.API, contract);
  }

  edit(id: number, contract: Contract): Observable<Contract> {
    return this.httpClient.put<Contract>(this.API + '/' + id, contract);
  }

  delete(id: number): Observable<Contract> {
    return this.httpClient.delete<Contract>(this.API + '/' + id);
  }
}
