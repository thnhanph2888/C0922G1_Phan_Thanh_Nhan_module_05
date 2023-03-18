import {Component, OnInit} from '@angular/core';
import {DiadiemService} from '../../service/diadiem.service';
import {Address} from '../../model/address';
import {CarService} from '../../service/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../model/car';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocationService} from '../../service/location.service';
import {CarTypeService} from '../../service/car-type.service';
import {CarType} from '../../model/car-type';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  addressList: Address[];
  idEdit: number;
  formEditCar: FormGroup;
  carTypeList: CarType[];

  constructor(private addressService: LocationService,
              private activatedRoute: ActivatedRoute,
              private carTypeService: CarTypeService,
              private carService: CarService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.addressService.findAll().subscribe((diadiemList) => {
      this.addressList = diadiemList;
      this.carTypeService.findAll().subscribe((carTypeList) => {
        this.carTypeList = carTypeList;
        this.getCar();
      });
    });
  }

  getCar() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.idEdit = +paramMap.get('id');
      this.carService.findById(this.idEdit).subscribe((carEdit) => {
        this.initForm(carEdit);
      });
    });
  }

  initForm(carEdit: Car) {
    this.formEditCar = new FormGroup({
      id: new FormControl(carEdit.id),
      licensePlates: new FormControl(carEdit.licensePlates),
      carType: new FormControl(this.carTypeList.filter((carType) => carType.id === carEdit.carType.id), Validators.required),
      garage: new FormControl(carEdit.garage, Validators.required),
      departure: new FormControl(this.addressList.filter((diadiem) => diadiem.id === carEdit.departure.id)[0], Validators.required),
      destination: new FormControl(this.addressList.filter((diadiem) => diadiem.id === carEdit.destination.id)[0], Validators.required),
      phone: new FormControl(carEdit.phone, [Validators.required, Validators.pattern('^[0][9][037][0-9]{7}$')]),
      email: new FormControl(carEdit.email, [Validators.required]),
      departureTime: new FormControl(carEdit.departureTime, Validators.required),
      arrivalTime: new FormControl(carEdit.arrivalTime, Validators.required)
    });
  }

  edit() {
    if (this.formEditCar.valid) {
      this.carService.edit(this.idEdit, this.formEditCar.value).subscribe(() => {
        this.route.navigateByUrl('/car/list');
        alert('chinh sua thanh cong');
      });
    } else {
      alert('Chinh sua that bai');
    }
  }

  cancel() {
    this.route.navigateByUrl('/car/list');
  }
}
