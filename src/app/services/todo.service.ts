import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    todosUrl:string =  'https://jsonplaceholder.typicode.com/todos';
    todosLimit = '?_limit=10';

  constructor(private http:HttpClient) { }

  // Get Todos
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

  // Delete Todo
  deleteTodo(todo:Todo):Observable<Todo>{
      const url = `${this.todosUrl}/${todo.id}`;
      return this.http.delete<Todo>(url, httpOptions);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo):Observable<any>{
      const url = `${this.todosUrl}/${todo.id}`;
      return this.http.put(url, todo, httpOptions)
  }

}
