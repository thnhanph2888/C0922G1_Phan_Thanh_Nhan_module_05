import {Component, OnInit} from '@angular/core';
import {IRatingUnit} from './rating-unit';

@Component({
  selector: 'app-rating-child',
  templateUrl: './rating-child.component.html',
  styleUrls: ['./rating-child.component.css']
})
export class RatingChildComponent implements OnInit {
  max = 10;
  ratingValue = 5;
  ratings: Array<IRatingUnit> = [];
  constructor() {
  }
  calculate(max, ratingValue) {
    for (let i = 0; i < max; i++) {
      this.ratings[i] = {
        value: i + 1,
        active: i < ratingValue
      };
    }
  }

  ngOnInit(): void {
    this.calculate(this.max, this.ratingValue);
  }

  select(index: number) {
    this.ratingValue = index;
    this.reset();
  }

  enter(index: number) {
    this.ratings.forEach((item, idx) => item.active = idx <= index);
  }

  reset() {
    this.ratings.forEach((item, idx) => item.active = idx < this.ratingValue);
  }
}
