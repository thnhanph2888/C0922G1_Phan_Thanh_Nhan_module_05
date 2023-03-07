import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: number;
  numberOneNew: number;
  numberTwoNew: number;
  message: string;

  calculator(numberOne: string, numberTwo: string, operator) {
    this.numberOneNew = parseInt(numberOne, 10);
    this.numberTwoNew = parseInt(numberTwo, 10);
    this.message = '';
    this.result = null;
    switch (operator) {
      case '+':
        this.result = this.numberOneNew + this.numberTwoNew;
        break;
      case '-':
        this.result = this.numberOneNew - this.numberTwoNew;
        break;
      case '*':
        this.result = this.numberOneNew * this.numberTwoNew;
        break;
      case '/':
        if (this.numberTwoNew === 0) {
          this.message = 'số chia không được phép là 0';
        } else {
          this.result = this.numberOneNew / this.numberTwoNew;
        }
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
