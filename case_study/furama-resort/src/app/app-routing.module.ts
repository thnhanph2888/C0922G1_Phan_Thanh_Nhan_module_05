import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerAddComponent} from './customer/customer-add/customer-add.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';

const routes: Routes = [
  {
    path: 'customer/list',
    component: CustomerListComponent
  },
  {
    path: 'customer/add',
    component: CustomerAddComponent
  },
  {
    path: 'customer/edit',
    component: CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
