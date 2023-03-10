import {Component, OnInit} from '@angular/core';
import {Todo} from './todo';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  id = 1;
  colourIndex: number;

  todos: Todo[] = [];
  content = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: this.id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }

  toggleToto(i: number) {
    this.colourIndex = Math.floor(Math.random() * 90);
    this.todos[i].color = 'rgb(18,' + this.colourIndex + ',32)';
    console.log(this.todos[i].color);
    this.todos[i].complete = !this.todos[i].complete;
  }

  reset(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
