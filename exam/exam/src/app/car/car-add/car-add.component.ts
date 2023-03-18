import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../service/car.service';
import {Router} from '@angular/router';
import {CarType} from '../../model/car-type';
import {CarTypeService} from '../../service/car-type.service';
import {LocationService} from '../../service/location.service';
import {Address} from '../../model/address';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  addressList: Address[];
  formAddCar: FormGroup;
  carTypeList: CarType[];
  constructor(private carService: CarService,
              private locationService: LocationService,
              private carTypeService: CarTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.locationService.findAll().subscribe((address) => {
      this.addressList = address;
      this.carTypeService.findAll().subscribe((carTypeList) => {
        this.carTypeList = carTypeList;
        this.formAddCar = new FormGroup({
          id: new FormControl(),
          licensePlates: new FormControl(),
          carType: new FormControl(Validators.required),
          garage: new FormControl(Validators.required),
          departure: new FormControl(Validators.required),
          destination: new FormControl(Validators.required),
          phone: new FormControl(Validators.pattern('^[0][9][037][0-9]{7}$')),
          email: new FormControl([Validators.required]),
          departureTime: new FormControl(Validators.required),
          arrivalTime: new FormControl(Validators.required)
        });
      });
    });
  }

  add() {
    if (this.formAddCar.valid) {
      const car = this.formAddCar.value;
      this.carService.add(car).subscribe(() => {
           this.router.navigateByUrl('car/list');
           alert('Them moi thanh cong');
      });
    } else {
      alert('Them moi that bai');
    }
  }

  cancel() {
    this.router.navigateByUrl('car/list');
  }
}
