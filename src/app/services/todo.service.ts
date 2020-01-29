import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
      return [
          {
              id: 1,
              title: 'To Do Item 1',
              completed: false
          },
          {
              id: 2,
              title: 'To Do Item 2',
              completed: true
          },
          {
              id: 3,
              title: 'To Do Item 3',
              completed: false
          }
      ]
  }
}
