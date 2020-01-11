import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formularioEjemplo: FormGroup;

  gradosArray:any = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"];



  constructor( public formBuilder: FormBuilder ) { }



  ngOnInit() {
    this.reactiveForm()
  }

  reactiveForm(){
    this.formularioEjemplo = this.formBuilder.group({
      nombre: ['', [Validators.required] ],
      correo: ['', [Validators.required, Validators.email] ],
      sexo: ['Masculino', [Validators.required] ],
      fechanacimiento: ['', [Validators.required]],
      grado: ['']
    });
  }


  enviarFormulario() {
    if( this.formularioEjemplo.valid ) {
      console.log( this.formularioEjemplo.value );
    }
  }



  public mostrarError = ( controlElement: string, errorTipo: string ) => {
    return this.formularioEjemplo.controls[controlElement].hasError( errorTipo );
  }

}
