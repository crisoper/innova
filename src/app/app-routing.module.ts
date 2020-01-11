import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoComponent } from './productos/producto/producto.component';
import { MarcaComponent } from './productos/marca/marca.component';
import { CategoriaComponent } from './productos/categoria/categoria.component';
import { Pagina404Component } from './admin/pagina404/pagina404.component';
import { LoginComponent } from './admin/login/login.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { AcercadeComponent } from './admin/acercade/acercade.component';


const routes: Routes = [

  { path: "productos", component: ProductoComponent },
  { path: "marcas", component: MarcaComponent },
  { path: "categorias", component: CategoriaComponent },
  { path: "usuarios", component: UsuarioComponent },
  { path: "acercade", component: AcercadeComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/productos", pathMatch: "full"},
  { path: "**", component: Pagina404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
