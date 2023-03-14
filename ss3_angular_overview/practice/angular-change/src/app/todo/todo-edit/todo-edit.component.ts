import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  formEditToto: FormGroup;
  id: number;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formEditToto = new FormGroup({
      content: new FormControl(),
      complete: new FormControl()
    });
  }

  submit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = parseInt(paramMap.get('id'), 10);
    });
    this.todoService.update(this.id, this.formEditToto.value).subscribe(() => {
      this.router.navigateByUrl('/todo');
    });
  }
}
