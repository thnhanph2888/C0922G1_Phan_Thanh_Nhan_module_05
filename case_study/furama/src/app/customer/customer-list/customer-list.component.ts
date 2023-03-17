import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[];
  idDelete: number;
  nameDelete: string;
  p = 1;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.customerService.getAll().subscribe((data) => {
      this.customerList = data;
    });
  }

  setInfoDelete(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  delete() {
    this.customerService.delete(this.idDelete).subscribe(() => {
      alert('xoa thanh cong');
      this.findAll();
    });
  }
}
