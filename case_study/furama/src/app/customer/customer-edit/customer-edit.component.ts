import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  formEditCustomer: FormGroup;
  customerTypeList: CustomerType[];
  private idEdit: number;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.customerTypeService.findAll().subscribe((data) => {
       this.customerTypeList = data;
    });
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.idEdit = +paramMap.get('id');
      this.getCustomerForm(this.idEdit);
    });

  }

  getCustomerForm(id: number) {
    this.customerService.findById(id).subscribe((products) => {
      const product: Customer = products;
      this.formEditCustomer = new FormGroup({
        customerTypeId: new FormControl(product.customerType.name, [Validators.required]),
        name: new FormControl(product.name, [Validators.required]),
        dateOfBirth: new FormControl(product.dateOfBirth, [Validators.required
          , Validators.pattern('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$')]),
        gender: new FormControl(product.gender, [Validators.required]),
        idCard: new FormControl(product.idCard, [Validators.required, Validators.pattern('^([0-9]{12})$|^([0-9]{9})$')]),
        phoneNumber: new FormControl(product.phoneNumber, [Validators.required
          , Validators.pattern('^((09[1|0])|([(]84[)][+]9[1|0]))[0-9]{7}$')]),
        email: new FormControl(product.email, [Validators.required
          , Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
        address: new FormControl(product.address, [Validators.required]),
      });
    });
  }

  edit() {
    const customer = this.formEditCustomer.value;
    this.customerService.edit(this.idEdit, customer).subscribe(() => {
      alert('cap nhat thanh cong');
      this.router.navigateByUrl('/customer/list');
    });
  }
}
