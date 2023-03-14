import {Component, OnInit} from '@angular/core';
import {Facility} from '../model/facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilityList: Array<Facility> = [
    {
      id: 1,
      name: 'fac',
      area: 2,
      cost: 100,
      maxPeople: 2,
      rentTypeId: 1,
      facilityTypeId: 2,
      standardRoom: '5 sao',
      descriptionOtherConvenience: 'phong don',
      poolArea: 2,
      numberOfFloors: 2,
      facilityFree: 'dsf'
    },
    {
      id: 2,
      name: 'facility2',
      area: 2,
      cost: 130,
      maxPeople: 2,
      rentTypeId: 1,
      facilityTypeId: 2,
      standardRoom: '5 sao',
      descriptionOtherConvenience: 'phong don',
      poolArea: 2,
      numberOfFloors: 2,
      facilityFree: 'dsf'
    } ,
    {
      id: 2,
      name: 'facility3',
      area: 2,
      cost: 230,
      maxPeople: 2,
      rentTypeId: 1,
      facilityTypeId: 2,
      standardRoom: '5 sao',
      descriptionOtherConvenience: 'phong don',
      poolArea: 2,
      numberOfFloors: 2,
      facilityFree: 'dsf'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
