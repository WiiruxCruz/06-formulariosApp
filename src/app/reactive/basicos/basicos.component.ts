import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4800ti',
      precio: 1600
    });
  }


  /*
  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4800'),
    precio: new FormControl(1500),
    existencias: new FormControl(5)
  });
  */

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)] ],
    precio: [ 0, [Validators.required, Validators.min(0)] ],
    existencias: [ 0 , [Validators.required, Validators.min(0)]]
  });

  campoEsValido( campo: string) {
    return this.miFormulario.controls[campo].errors
    && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
