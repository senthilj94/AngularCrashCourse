import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  setClasses() {
    const classes = {
      todo: true,
      iscomplete: this.todo.completed
    };
    return classes;
  }

  toggle(todo: Todo) {
    console.log(todo.title);
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe(updateResult => {
      console.log(updateResult);
    });
  }

  delete(todo: Todo) {
    this.deleteTodo.emit(todo);
    console.log('delete');
  }
}
