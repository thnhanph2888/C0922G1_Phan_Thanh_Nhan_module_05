import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css']
})
export class ContractAddComponent implements OnInit {
  formAddContract: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.formAddContract = new FormGroup({
      id: new FormControl(''),
      startDate: new FormControl(''
        , Validators.pattern('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$')),
      endDate: new FormControl(''
        , Validators.pattern('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$')),
      deposit: new FormControl('', Validators.pattern('^[1-9]+$')),
      employeeName: new FormControl(''),
      customerName: new FormControl(''),
      facilityName: new FormControl(''),
    });
  }

}
