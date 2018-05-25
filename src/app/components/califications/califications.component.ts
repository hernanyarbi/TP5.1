import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Calification } from '../../models/Calification';
import { FieldValidatorComponent } from '../../_sharedComponents/field-validator/field-validator.component';
import { FieldValidatorService } from '../../_sharedComponents/field-validator/field-validator.service';
import { CustomError } from '../../_sharedComponents/field-validator/CustomError';

@Component({
  selector: 'app-califications',
  templateUrl: './califications.component.html',
  styles: []
})
export class CalificationsComponent implements OnInit {

  @ViewChildren(FieldValidatorComponent)
  validators: QueryList<FieldValidatorComponent>;
  customErrors: Array<CustomError> = [];
  calification: Calification = new Calification();

  constructor(private fieldValidatorService: FieldValidatorService) { }

  ngOnInit() {
    this.fieldValidatorService.inputComponent = this;
    this.customErrors.push(new CustomError('invalid_calification', 'La calificacion no es valida.'));
  }

  // Formulairo
  formCalification = new FormGroup({
    legajo: new FormControl(null, Validators.required),
    clfWrite: new FormControl(null, [Validators.required, this.calificationsValidator]),
    clfOral: new FormControl(null, [Validators.required, this.calificationsValidator]),
    clfConcept: new FormControl(null, [Validators.required, this.calificationsValidator])
  });

  calculateCalifications() {
    this.fieldValidatorService.clearErrors();
    if (this.isValid())
      alert(`El Alumno Está ${this.calculate()}`);
    else
      this.fieldValidatorService.showErrors();

  }

  // Valida que las calificaciones enten entre 0 al 10
  calificationsValidator(control: FormControl): { [err: string]: boolean } {
    if (control.value < 0 || control.value > 10)
      return {
        'invalid_calification': true
      };
    return null;
  }

  // Devuelve true si el formulario es valido
  isValid() {
    return this.formCalification.valid;
  }

  // Calcula el promedio
  calculate() {
    this.calification = this.formCalification.value;
    let promedio = (this.calification.clfWrite + this.calification.clfOral + this.calification.clfConcept) / 3;

    if (promedio >= 7) return 'Promocionado';
    else if (promedio < 7 && promedio >= 4) return 'Aprobado';
    else if (promedio < 4) return 'Desaprobado';
  }

}
