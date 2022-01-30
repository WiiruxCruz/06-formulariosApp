import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //@ViewChild('miFormulario', {static: false}) miFormulario!: NgForm;
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    //el principal problema era que tenía producto con p mayusculas en HTML y la buscaba con minuscula en TS
    /*
    Esta versión no aplica, encontrado en udemy
    Salta error en .producto? dentro de la función nombreValido
    console.log(this.miFormulario?.controls['producto'].invalid
    && this.miFormulario?.controls['producto'].touched);
    */
    console.log(this.miFormulario?.controls.producto?.invalid
      && this.miFormulario?.controls.producto?.touched);

    return this.miFormulario?.controls.producto?.invalid
    && this.miFormulario?.controls.producto?.touched;

    //return this.miFormulario?.controls['producto']?.invalid
    //&& this.miFormulario?.controls['producto']?.touched;
  }

  //guardar( miFormulario: NgForm ) {
    //console.log( miFormulario );
  guardar() {
    console.log( this.miFormulario );
  }

}
