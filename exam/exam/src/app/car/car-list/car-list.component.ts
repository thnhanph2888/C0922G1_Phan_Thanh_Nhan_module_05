import {Component, OnInit} from '@angular/core';
import {Car} from '../../model/car';
import {CarService} from '../../service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carList: Car[];
  soXe: string;
  idDelete: number;
  cars: any;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.carService.findAll().subscribe((carList) => {
      this.cars = carList;
      this.carList = this.cars.content;
    });
  }

  setInfoDelete(soXe: string, id: number) {
    this.soXe = soXe;
    this.idDelete = id;
    this.delete();
  }

  delete() {
    this.carService.delete(this.idDelete).subscribe(() => {
      alert('xoa thanh cong');
      this.findAll();
    });
  }
}
