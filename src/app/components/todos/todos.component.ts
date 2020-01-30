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

  deleteTodo(todo:Todo){
      // Remove from UI
      this.todos = this.todos.filter(t => t.id !== todo.id);
      // This is where we should delete from server
      this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
      //This comes from the add-todo component
      this.todoService.addTodo(todo).subscribe(todo => {
          this.todos.push(todo);
      });
  }

}
