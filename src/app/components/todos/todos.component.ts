import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodoFromList(todo: Todo) {
    this.todos = this.todos.filter(list => list.id !== todo.id);
    console.log('delete todo');
    this.todoService.deleteTodo(todo).subscribe(deleteTodos => {
      console.log(deleteTodos);
    });
  }

  addTodo(todo: Todo) {
    console.log('Add Todo');
    this.todoService.addTodo(todo).subscribe(todoadd => {
      this.todos.push(todoadd);
    });
  }
}
