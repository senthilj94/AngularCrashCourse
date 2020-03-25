import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    const classes = {
      todo: true,
      iscomplete: this.todo.completed
    };
    return classes;
  }

  toggle() {
    this.todo.completed = !this.todo.completed;
  }

  delete() {
    console.log('delete');
  }
}
