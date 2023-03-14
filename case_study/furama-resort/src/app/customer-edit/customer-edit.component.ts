import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  formEditCustomer: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.formEditCustomer = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^[K][-][H][0-9]{4}$')]),
      customerTypeId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required
        , Validators.pattern('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$')]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{12})$|^([0-9]{9})$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^((09[1|0])|([(]84[)][+]9[1|0]))[0-9]{7}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      address: new FormControl('', [Validators.required]),
    });
  }
}
