import { ProyectoDetalleComponent } from './proyecto/proyecto-detalle/proyecto-detalle.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProyectoComponent } from "./proyecto/proyecto.component";
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoEdicionComponent } from "./proyecto/proyecto-edicion/proyecto-edicion.component";
import { ProyectoInicioComponent } from './proyecto/proyecto-inicio/proyecto-inicio.component';


const appRoutes: Routes = [
    { path: "proyecto", component: ProyectoComponent,children:[
        { path: '', component:ProyectoInicioComponent},
        { path: 'nuevo', component: ProyectoEdicionComponent},
        { path: ':id/editar',component: ProyectoEdicionComponent },
        { path: ':id', component: ProyectoDetalleComponent}]},
    { path: "contacto", component: ContactoComponent },
    { path: "", redirectTo: "proyecto", pathMatch: "full" }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}