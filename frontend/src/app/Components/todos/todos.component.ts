import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, TodoItemComponent]
})
export class TodosComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'This is title 1',
        desc: 'This is description 1',
        active: true
      },
      {
        sno: 2,
        title: 'This is title 2',
        desc: 'This is description 2',
        active: false
      },
      {
        sno: 3,
        title: 'This is title 3',
        desc: 'This is description 3',
        active: true
      }
    ];
  }
  deleteTodo = (todo: Todo) => {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}