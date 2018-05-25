import { Component, OnInit, Input, Renderer2, ContentChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomError } from './CustomError';

@Component({
  selector: 'field-validator',
  templateUrl: './field-validator.component.html',
  styleUrls: ['./field-validator.component.css']
})
export class FieldValidatorComponent implements OnInit {

  private _touched: boolean;
  private error: string;
  private _targetField: FormControl;

  @ContentChild('component_validator')
  componentValidator: ElementRef;
  @Input() set targetField(targetField: FormControl) {
    this._targetField = targetField;
    this._targetField.valueChanges.subscribe(() => {
      if (this.componentValidator) {
        this.error = '';
        if (this.componentValidator.nativeElement)
          this.renderer.removeClass(this.componentValidator.nativeElement, 'has-error-component');
      }
    });
  }

  get targetField() {
    return this._targetField;
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  clearErrorFields() {
    this.error = '';
    this.refreshUI();
  }

  // Muestra los errores dependiento de la validacion y mensaje en customErrors
  showErrors(customErrors: Array<CustomError>) {

    this.error = '';
    let errors = this.targetField.errors;

    if (errors)
      if (this.targetField.hasError('required'))
        this.error = 'El campo es requerido *';
      else
        if (customErrors)
          customErrors.forEach(item => {
            if (this.targetField.hasError(item.errorKey)) {
              this.error = item.errorMsg;
              return;
            }
          });
    this.refreshUI();
  }
  // Busca los errores que se encuentra en el FormControl
  getErrors() {

    if (this.targetField.errors == null)
      return null;

    let controlName;
    let parent = this.targetField.parent;
    if (parent instanceof FormGroup)
      Object.keys(parent.controls).forEach((name) => {
        if (this.targetField === parent.controls[name])
          controlName = name;
      });
    return { field: controlName, error: this.targetField.errors };
  }

  // Busca desde el padre del FormControl para obtener el nombre de la propiedad
  getFieldName() {
    let controlName;
    let parent = this.targetField.parent;
    if (parent instanceof FormGroup)
      Object.keys(parent.controls).forEach((name) => {
        if (this.targetField === parent.controls[name]) {
          controlName = name;
          return;
        }
      });
    return controlName;
  }

  // Refresca la pantalla
  private refreshUI() {
    if (this.componentValidator)
      if (this.componentValidator.nativeElement)
        if (this.error && this.error !== '')
          this.renderer.addClass(this.componentValidator.nativeElement, 'has-error-component');
        else
          this.renderer.removeClass(this.componentValidator.nativeElement, 'has-error-component');
  }

}
