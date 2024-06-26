import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';
  editingTodo!: Todo;
  editingTodoTitle!: string;

  // bad practice to add things to a constructor
  constructor() {

  }

  addTodo() {
    if(this.newTodo.trim().length === 0){
      return;
    }
    const todo: Todo = {
      id: this.todos.length + 1,
      title: this.newTodo,
      completed: false,
      time: new Date().toLocaleString()
    };
    this.todos.push(todo);
    this.newTodo = '';
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    this.newTodo = todo.title;
    this.deleteTodo(todo);
  }
}