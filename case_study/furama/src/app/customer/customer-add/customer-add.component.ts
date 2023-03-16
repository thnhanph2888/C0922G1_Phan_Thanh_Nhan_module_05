import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  formAddCustomer: FormGroup;
  customerTypeList: CustomerType[];
  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit() {
    this.customerTypeService.findAll().subscribe((data) => {
       this.customerTypeList = data;
    });
    this.formAddCustomer = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('^[K][H][-][0-9]{4}$')]),
      customerTypeId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required
        , Validators.pattern('^[0-9]{2}/[0-9]{2}/[0-9]{4}$')]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{12})$|^([0-9]{9})$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^((09[1|0])|([(]84[)][+]9[1|0]))[0-9]{7}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('')
    });
  }

  submit() {
    if (this.formAddCustomer.valid) {
      const customer = this.formAddCustomer.value;
      this.customerService.add(customer).subscribe(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigateByUrl('/customer/list');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Vui lòng kiểm tra lại dữ liệu nhập vào!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  }
}
