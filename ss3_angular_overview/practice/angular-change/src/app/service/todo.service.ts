import {Injectable} from '@angular/core';
import {Todo} from '../todo/todo';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API);
  }

  save(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.API, todo);
  }

  update(id: number, todoUpdate: Todo): Observable<Todo> {
    let complete = false;
    if (todoUpdate.complete.toString() === 'true') {
      complete = true;
    }
    const todo: Todo = {
      content: todoUpdate.content,
      complete
    };
    return this.httpClient.put<Todo>(this.API + '/' + id, todo);
  }

  findById(id): Observable<Todo> {
    return this.httpClient.get<Todo>(this.API + '?id=' + id);
  }

  delete(id): Observable<Todo> {
    return this.httpClient.delete<Todo>(this.API + '/' + id);
  }
}
