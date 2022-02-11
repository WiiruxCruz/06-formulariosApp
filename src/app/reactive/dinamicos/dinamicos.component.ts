import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

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
    nombre: [ '', [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array( [
      //this.fb.control()
      [ 'Metal Gear' ],
      [ 'Death Stranding' ]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoEsValido( campo: string) {
    return this.miFormulario.controls[campo].errors
    && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if( this.nuevoFavorito.invalid ) { return; }

    //this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();
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
