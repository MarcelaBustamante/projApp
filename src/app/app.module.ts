import { ProyectoService } from './_service/proyecto.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { ProyectoListaComponent } from './proyecto/proyecto-lista/proyecto-lista.component';
import { ProyectoDetalleComponent } from './proyecto/proyecto-detalle/proyecto-detalle.component';
import { ProyectoEdicionComponent } from './proyecto/proyecto-edicion/proyecto-edicion.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { ProyectoFilterPipe } from './_pipe/proyecto-filter.pipe';
import { ProyectoInicioComponent } from './proyecto/proyecto-inicio/proyecto-inicio.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProyectoComponent,
    ContactoComponent,
    ProyectoListaComponent,
    ProyectoDetalleComponent,
    ProyectoEdicionComponent,
    ProyectoFilterPipe,
    ProyectoInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTableModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
