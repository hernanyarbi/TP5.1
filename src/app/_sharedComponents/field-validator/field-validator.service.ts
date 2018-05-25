import { Injectable } from '@angular/core';

@Injectable()
export class FieldValidatorService {

  inputComponent: any;

  constructor() { }

  clearErrors() {
    if (!this.inputComponent || !this.inputComponent.hasOwnProperty('validators'))
      return;

    let validators = this.inputComponent.validators;
    if (validators && validators.length > 0)
      validators.forEach(validator => {
        validator.clearErrorFields();
      });
  }

  showErrors() {
    if (!this.inputComponent || !this.inputComponent.hasOwnProperty('validators'))
      return;


    let validators = this.inputComponent.validators;
    if (validators && validators.length > 0)
      validators.forEach(validator => {
        if (!this.inputComponent.hasOwnProperty('customErrors'))
          validator.showErrors();
        else
          validator.showErrors(this.inputComponent.customErrors);
      });
  }

  existErrors() {
    let errors = this.getErrors();
    return errors != null && errors.length > 0;
  }

  getErrors() {

    if (!this.inputComponent || !this.inputComponent.hasOwnProperty('validators'))
      return;

    let errors = [];
    let validators = this.inputComponent.validators;
    if (validators && validators.length > 0)
      validators.forEach(validator => {
        if (validator.getErrors())
          errors.push(validator.getErrors());
      });
    return errors;
  }
}
