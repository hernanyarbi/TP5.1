import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Category } from '../../models/category';
import { Inscription } from '../../models/inscription';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FieldValidatorComponent } from '../../-shared-components/field-validator/field-validator.component';
import { CustomError } from '../../_shared-components/field-validator/CustomError';
import { FieldValidatorService } from '../../_shared-components/field-validator/field-validator.service';

@Component({
	selector: 'app-basket-school',
	templateUrl: './basket-school.component.html',
	styleUrls: ['./basket-school.component.css']
})
export class BasketSchoolComponent implements OnInit {

	@ViewChildren(FieldValidatorComponent)
	validators: QueryList<FieldValidatorComponent>;
	customErrors: Array<CustomError> = [];
	modalData: Inscription = null;
	filtro = '';
	categories: Category[] = [];
	inscripts: Inscription[] = [];
	inscriptsFilter: Inscription[] = [];

	basketSchoolForm = new FormGroup({
		fecha: new FormControl(this.dateToString(new Date()), Validators.required),
		apellido: new FormControl('', Validators.required),
		nombres: new FormControl('', Validators.required),
		categoria: new FormGroup({
			nombre: new FormControl('', Validators.required),
			profesor: new FormControl(),
			edadDesde: new FormControl(),
			edadHasta: new FormControl()
		})
	});

	constructor(private fieldValidatorService: FieldValidatorService) {
		this.initData();
		this.basketSchoolForm.get('categoria.nombre').valueChanges
			.subscribe(category => {
				if (category === 'Premini') {
					this.basketSchoolForm.get('categoria.profesor').setValue(this.categories[0].profesor);
					this.basketSchoolForm.get('categoria.edadDesde').setValue(this.categories[0].edadDesde);
					this.basketSchoolForm.get('categoria.edadHasta').setValue(this.categories[0].edadHasta);
				}
			});
	}

	initData() {
		this.categories.push(new Category('Premini', 'Jose Vargas', 3, 5));
		this.categories.push(new Category('Mini', 'Omar Perez', 6, 9));
		this.categories.push(new Category('Infantil', 'Manuel Campazo', 10, 14));
		this.categories.push(new Category('Juvenil', 'Daviv Nosioni', 15, 19));
		let inscrip = {
			fecha: new Date(),
			apellido: 'Jose',
			nombres: 'Hernandez',
			categoria: this.categories[0]
		};
		this.inscripts.push(inscrip);

		inscrip = {
			fecha: new Date(),
			apellido: 'Adrian',
			nombres: 'Alonso',
			categoria: this.categories[1]
		};
		this.inscripts.push(inscrip);

		inscrip = {
			fecha: new Date(),
			apellido: 'Pedro',
			nombres: 'Suarez',
			categoria: this.categories[2]
		};
		this.inscripts.push(inscrip);

		inscrip = {
			fecha: new Date(),
			apellido: 'Santiago',
			nombres: 'Mendez',
			categoria: this.categories[3]
		};
		this.inscripts.push(inscrip);
	}

	ngOnInit() {
		this.fieldValidatorService.inputComponent = this;
		this.inscriptsFilter = this.inscripts;
	}

	addInscription() {
		this.fieldValidatorService.clearErrors();
		if (this.basketSchoolForm.valid) {
			this.inscripts.splice(0, 0, this.basketSchoolForm.value);
			this.inscriptsFilter = this.inscripts;
		} else {
			this.fieldValidatorService.showErrors();
		}
	}

	showData(data) {
		this.modalData = data;
	}

	dateToString(date: Date) {
		return `${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()}/
		${date.getMonth() + 1 <= 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/
		${date.getFullYear()}`;
	}

	filtroCat() {
		this.inscriptsFilter = [];
		console.log(this.filtro);
		for (let i = 0; i < this.inscripts.length; i++) {
			if (this.inscripts[i].categoria.nombre == this.filtro) {
				this.inscriptsFilter.push(this.inscripts[i]);
			}
		}
	}
}
