import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
  export class CustomerListComponent implements OnInit {
  customerList: Array<Customer> = [
    {
      id: 1,
      customerTypeId: 2,
      name: 'Phan Thanh Nhan',
      dateOfBirth: '2003',
      gender: true,
      idCard: '324',
      phoneNumber: 23423,
      email: 'thnhanph@gmail',
      address: 'gia lai, gia lai, vietnam'
    },
    {
      id: 1,
      customerTypeId: 2,
      name: 'Phan Thanh Nhan',
      dateOfBirth: '2003',
      gender: true,
      idCard: '324',
      phoneNumber: 23423,
      email: 'thnhanph@gmail',
      address: 'gia lai, gia lai, vietnam'
    },
    {
      id: 1,
      customerTypeId: 2,
      name: 'Phan Thanh Nhan',
      dateOfBirth: '2003',
      gender: true,
      idCard: '324',
      phoneNumber: 23423,
      email: 'thnhanph@gmail',
      address: 'gia lai, gia lai, vietnam'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
