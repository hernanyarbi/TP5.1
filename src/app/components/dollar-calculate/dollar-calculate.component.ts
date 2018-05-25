import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dollar-calculate',
  templateUrl: './dollar-calculate.component.html',
  styles: []
})
export class DollarCalculateComponent implements OnInit {

  title = 'Pesos';
  typeMoney = true;
  result: number;

  formDollar = new FormGroup({
    amount: new FormControl(null, [Validators.required, this.moneyValidator]),
    dollar: new FormControl(null, [Validators.required, this.moneyValidator])
  });

  constructor() { }

  ngOnInit() {
  }

  calculateDollar() {
    let amount = this.formDollar.get('amount').value;
    let dollar = this.formDollar.get('dollar').value;
    if (this.typeMoney)
      this.result = amount / dollar;
    else
      this.result = amount * dollar;

  }

  moneyValidator(control: FormControl): { [err: string]: boolean } {
    if (control.value <= 0) return { 'invalid_money': true }
    return null;
  }

}
