import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { UsuarioComponent } from './usuario/usuario.component';

import {MatCardModule} from '@angular/material/card';

import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, Pagina404Component, AcercadeComponent, UsuarioComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    Pagina404Component,
    AcercadeComponent,
    UsuarioComponent
  ]
})
export class AdminModule { }
