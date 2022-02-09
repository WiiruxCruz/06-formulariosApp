import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
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

  constructor( private fb: FormBuilder ) { }

  campoEsValido( campo: string) {
    return this.miFormulario.controls[campo].errors
    && this.miFormulario.controls[campo].touched;
  }

}
