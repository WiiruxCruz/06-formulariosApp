import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group ({
    nombre: [ '', [Validators.required, Validators.minLength(3)] ]
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

    //imprimir valor del formulario solo si es valido
    console.log(this.miFormulario.value);
  }

}
