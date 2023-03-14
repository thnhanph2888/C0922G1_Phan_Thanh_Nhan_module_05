import {Component, OnInit} from '@angular/core';
import {Contract} from '../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Array<Contract> = [
    {
      id: 1,
      startDate: '12-12-2023',
      endDate: '13-12-2023',
      deposit: 123,
      employeeName: 'Phan Thanh Nhan',
      customerName: 'Phan Thanh Nhan',
      facilityName: 'Phan Thanh Nhan'
    },
    {
      id: 1,
      startDate: '12-12-2023',
      endDate: '13-12-2023',
      deposit: 123,
      employeeName: 'Phan Thanh Nhan',
      customerName: 'Phan Thanh Nhan',
      facilityName: 'Phan Thanh Nhan'
    },
    {
      id: 1,
      startDate: '12-12-2023',
      endDate: '13-12-2023',
      deposit: 123,
      employeeName: 'Phan Thanh Nhan',
      customerName: 'Phan Thanh Nhan',
      facilityName: 'Phan Thanh Nhan'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
