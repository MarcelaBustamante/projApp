import { LoginGuard } from './_service/login-guard.service';
import { ProyectoDetalleComponent } from './proyecto/proyecto-detalle/proyecto-detalle.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProyectoComponent } from "./proyecto/proyecto.component";
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoEdicionComponent } from "./proyecto/proyecto-edicion/proyecto-edicion.component";
import { ProyectoInicioComponent } from './proyecto/proyecto-inicio/proyecto-inicio.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: "proyecto", component: ProyectoComponent,children:[
        { path: '', component:ProyectoInicioComponent},
        { path: 'nuevo', component: ProyectoEdicionComponent},
        { path: ':id/editar',component: ProyectoEdicionComponent },
        { path: ':id', component: ProyectoDetalleComponent}], canActivate: [LoginGuard]},
    { path: "contacto", component: ContactoComponent,  canActivate: [LoginGuard]},
    { path: "", redirectTo: "proyecto", pathMatch: "full" },
    {path:"login", component: LoginComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}