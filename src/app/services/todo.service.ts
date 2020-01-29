import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    todosUrl:string =  'https://jsonplaceholder.typicode.com/todos';
    todosLimit = '?_limit=10';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
      // return [
      //     {
      //         id: 1,
      //         title: 'To Do Item 1',
      //         completed: false
      //     },
      //     {
      //         id: 2,
      //         title: 'To Do Item 2',
      //         completed: true
      //     },
      //     {
      //         id: 3,
      //         title: 'To Do Item 3',
      //         completed: false
      //     }
      // ]
      return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
