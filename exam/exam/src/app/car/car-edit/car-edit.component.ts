import {Component, OnInit} from '@angular/core';
import {DiadiemService} from '../../service/diadiem.service';
import {Diadiem} from '../../model/diadiem';
import {CarService} from '../../service/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../model/car';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  diadiemList: Diadiem[];
  idEdit: number;
  formEditCar: FormGroup;

  constructor(private diadiemService: DiadiemService,
              private activatedRoute: ActivatedRoute,
              private carService: CarService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.diadiemService.findAll().subscribe((diadiemList) => {
      this.diadiemList = diadiemList;
      this.getCar();
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
      bienSoXe: new FormControl(carEdit.licensePlates),
      carType: new FormControl(carEdit.carType, Validators.required),
      tenNhaXe: new FormControl(carEdit.garage, Validators.required),
      diemdi: new FormControl(this.diadiemList.filter((diadiem) => diadiem.id == carEdit.departure.id)[0], Validators.required),
      diemden: new FormControl(this.diadiemList.filter((diadiem) => diadiem.id == carEdit.destination.id)[0], Validators.required),
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
