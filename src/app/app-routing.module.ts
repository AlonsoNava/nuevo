import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path:'inicio', component:InicioComponent },
  { path:'empleados', component:EmpleadosComponent },
  { path:'grupos', component:GruposComponent },
  { path:'**', redirectTo:'/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
