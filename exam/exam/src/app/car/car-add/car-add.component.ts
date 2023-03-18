import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../service/car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  formAddCar: FormGroup;
  constructor(private carService: CarService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddCar = new FormGroup({
      id: new FormControl(),
      bienSoXe: new FormControl(),
      carType: new FormControl(Validators.required),
      tenNhaXe: new FormControl(Validators.required),
      diemdi: new FormControl(Validators.required),
      diemden: new FormControl(Validators.required),
      phone: new FormControl(Validators.pattern('^[0][9][037][0-9]{7}$')),
      email: new FormControl([Validators.required]),
      departureTime: new FormControl(Validators.required),
      arrivalTime: new FormControl(Validators.required)
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
}
