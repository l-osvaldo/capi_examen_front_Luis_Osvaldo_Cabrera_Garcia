import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './usuarios/tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
