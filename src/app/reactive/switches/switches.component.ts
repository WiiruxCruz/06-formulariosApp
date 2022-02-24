import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
      this.miFormulario.reset({
        ...this.persona,
        condiciones: false
      });

      /*
      this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
        console.log(newValue);
      })
      */

      this.miFormulario.valueChanges.subscribe(
        /*
        form => {
          delete form.condiciones;
          this.persona = form;
          console.log(form);
        }
        */
       ({ condiciones, ...rest}) => {
         this.persona = rest;
       }
      )
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    console.log(formValue);

    delete formValue.condiciones;

    this.persona = formValue;
  }

}
