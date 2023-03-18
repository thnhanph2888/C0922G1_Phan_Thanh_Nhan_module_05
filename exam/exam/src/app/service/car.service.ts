import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  API = 'http://localhost:8080/api/car/list';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.API);
  }

  findById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(this.API + '/' + id);
  }

  add(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.API, car);
  }

  edit(id: number, car: Car): Observable<Car> {
    return this.httpClient.put<Car>(this.API + '/' + id, car);
  }

  delete(id: number): Observable<Car> {
    return this.httpClient.delete<Car>(this.API + '/' + id);
  }
}
