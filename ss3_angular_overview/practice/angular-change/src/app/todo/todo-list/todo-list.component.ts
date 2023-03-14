import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  id = 1;

  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.todoService.findAll().subscribe(data => {
      this.todos = data;
    });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(() => {
        this.findAll();
      });
    }
  }
}
