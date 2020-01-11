import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { MarcaComponent } from './marca/marca.component';


@NgModule({
  declarations: [CategoriaComponent, ProductoComponent, MarcaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriaComponent,
    ProductoComponent,
    MarcaComponent
  ]
})
export class ProductosModule { }
