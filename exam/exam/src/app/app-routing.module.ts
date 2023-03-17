import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarListComponent} from './car/car-list/car-list.component';
import {CarEditComponent} from './car/car-edit/car-edit.component';

const routes: Routes = [
  {
    path: 'car/list',
    component: CarListComponent
  },
  {
    path: 'car/edit/:id',
    component: CarEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
