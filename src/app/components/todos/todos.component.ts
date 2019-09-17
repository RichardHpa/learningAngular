import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/Todo';

// Whatever the selector name is, thats what we use to call it in the html
// Look at app.component.html for reference
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos:Todo[];


  constructor() { }

  // this is similar to componentDidMount with react
  ngOnInit() {
      this.todos = [
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
