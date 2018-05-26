import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FieldValidatorComponent } from '../../_sharedComponents/field-validator/field-validator.component';
import { CustomError } from '../../_sharedComponents/field-validator/CustomError';
import { FieldValidatorService } from '../../_sharedComponents/field-validator/field-validator.service';

@Component({
  selector: 'app-dollar-calculate',
  templateUrl: './dollar-calculate.component.html',
  styles: []
})
export class DollarCalculateComponent implements OnInit {

  @ViewChildren(FieldValidatorComponent)
  validators: QueryList<FieldValidatorComponent>;
  customErrors: Array<CustomError> = [];

  title = 'Pesos';
  typeMoney = true;
  result: number;

  formDollar = new FormGroup({
    amount: new FormControl(null, [Validators.required, this.moneyValidator]),
    dollar: new FormControl(null, [Validators.required, this.moneyValidator])
  });

  constructor(private fieldValidatorService: FieldValidatorService) { }

  ngOnInit() {
    this.fieldValidatorService.inputComponent = this;
    this.customErrors.push(new CustomError('invalid_money', 'El presio del dolar no es valido.'));
  }

  calculateDollar() {
    let amount = this.formDollar.get('amount').value;
    let dollar = this.formDollar.get('dollar').value;
    if (this.typeMoney)
      this.result = amount / dollar;
    else
      this.result = amount * dollar;

  }

  calculate() {
    this.fieldValidatorService.clearErrors();
    if (this.isValid()) this.calculateDollar();
    else this.fieldValidatorService.showErrors();
  }

  isValid() {
    return this.formDollar.valid;
  }

  moneyValidator(control: FormControl): { [err: string]: boolean } {
    if (control.value <= 0) return { 'invalid_money': true };
    return null;
  }

}
