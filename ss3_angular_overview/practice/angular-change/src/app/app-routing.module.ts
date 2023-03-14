import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {TodoDeleteComponent} from './todo/todo-delete/todo-delete.component';
import {TodoEditComponent} from './todo/todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'todo/delete/:id',
    component: TodoDeleteComponent
  },
  {
    path: 'todo/edit/:id',
    component: TodoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
