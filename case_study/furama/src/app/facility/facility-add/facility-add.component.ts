import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {
  formAddFacility: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formAddFacility = new FormGroup({
       id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('^[^0-9]+$')]),
      area: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      rentTypeId: new FormControl('', [Validators.required]),
      facilityTypeId: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.min(1)]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.min(1)]),
      facilityFree: new FormControl('', [Validators.required]),
    });
  }

}
