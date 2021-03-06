import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

	miFormulario: FormGroup = this.fb.group({
		nombre: ['', [ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ]],
		email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ] ],
		username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider ] ],
		password: ['', [ Validators.required, Validators.minLength(6) ] ],
		password2: ['', [ Validators.required ] ]
	}, {
		validators: [ this.validatorService.camposIguales('password', 'password2') ]
	});

	//emailErrorMsg: string = '';

	get emailErrorMsg(): string {

		const errores = this.miFormulario.get('email')?.errors;
		if( errores?.required ) {
			return 'Email es obligatorio';
		} else if ( errores?.pattern ) {
			return 'El valor ingresado no tiene formato de correo';
		} else if ( errores?.emailTomado ) {
			return 'El correo ya fue tomado';
		}
		return '';
	}

	constructor(
		private fb: FormBuilder,
		private validatorService: ValidatorService,
		private emailValidator: EmailValidatorService
	) { }

	ngOnInit(): void {
		this.miFormulario.reset({
			nombre: 'Alfredo Ramirez',
			email: 'test1@test.com',
			username: 'alfredo_ram92@hotmail.com',
			password: '123456',
			password2: '123456'
		})
	}

	campoNoValido( campo: string ) {
		return this.miFormulario.get(campo)?.invalid
			&& this.miFormulario.get(campo)?.touched;
	}

	/*
	emailRequired() {
		return this.miFormulario.get('email')?.errors?.required
		&& this.miFormulario.get('email')?.touched;
	}

	emailFormato() {
		return this.miFormulario.get('email')?.errors?.pattern
		&& this.miFormulario.get('email')?.touched;
	}

	emailTomado() {
		return this.miFormulario.get('email')?.errors?.emailTomado
		&& this.miFormulario.get('email')?.touched;
	}
	*/

	submitFormulario() {
		console.log( this.miFormulario.value );

		this.miFormulario.markAllAsTouched();
	}

}
