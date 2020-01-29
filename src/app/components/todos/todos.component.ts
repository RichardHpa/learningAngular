import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';

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


  constructor(private todoService:TodoService) { }

  // this is similar to componentDidMount with react
  ngOnInit() {
      // this.todos = this.todoService.getTodos();
      this.todoService.getTodos().subscribe(todos => {
          this.todos = todos;
      });
  }

}
