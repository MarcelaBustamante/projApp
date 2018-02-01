
import { Injectable } from '@angular/core';
import { Proyecto } from '../_model/proyecto';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProyectoService {

   /* proyectos: Proyecto[]=[
    new Proyecto(1,"SpringRestful","http://svn.redlink.com.ar/svn/automatizacion/branches/springrestful"),
    new Proyecto(2,"Providers","http://svn.redlink.com.ar/svn/automatizacion/branches/providers")];*/
  private url:string  = 'http://localhost:8080/projects';

  constructor(private http: HttpClient) { }

  getProyectos(){
   // return this.proyectos;
  return this.http.get<Proyecto[]>(`${this.url}/all/`);
  }

  getProyecto(id:number){
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }
}
