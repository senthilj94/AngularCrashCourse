import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=10';

  constructor(private httpClient: HttpClient) { }

  getTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.todoUrl}${this.todoLimit}`);
  }

  updateTodo(todo: Todo): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.httpClient.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.httpClient.delete<Todo>(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.todoUrl, todo, httpOptions);
  }
}
