import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// allow us to use the Todo's model in the component
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

    // This allows the component to accept an 'input value'
    // The input is [todo]="todo" which is on the ts file
    @Input() todo: Todo;
    @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

    constructor(private todoService:TodoService) { }

    ngOnInit() {
    }

    //Seting the Dynamic classes to the todos
    setClasses(){
        // the classes object will out put the keys as class names if there value is true.
        // Because this
        let classes = {
            todo: true,
            'is-complete': this.todo.completed
        }
        return classes;
    }

    onToggle(todo){
        // Toggle in UI
        todo.completed = !todo.completed;
        // Toggle on server
        this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
    }

    onDelete(todo){
        this.deleteTodo.emit(todo);
    }
}
