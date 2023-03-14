import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {
  todo: Todo;
  id: number;
  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
        this.id = parseInt(paramMap.get('id'), 10);
    });
    this.todoService.findById(this.id).subscribe((todo) => {
      this.todo = todo;
    });
  }


  delete() {
    this.todoService.delete(this.id).subscribe(() => {
      this.router.navigateByUrl('/todo');
    });
  }
}
