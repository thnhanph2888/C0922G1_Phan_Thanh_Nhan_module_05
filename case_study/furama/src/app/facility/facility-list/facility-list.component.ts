import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[];
  idDelete: number;
  nameDelete: string;
  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityService.getAll().subscribe((data) => {
         this.facilityList = data;
    });
  }

  setInfoDelete(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  delete() {
    this.facilityService.delete(this.idDelete).subscribe(() => {});
  }

}
