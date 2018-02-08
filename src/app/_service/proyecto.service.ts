
import { Injectable } from '@angular/core';
import { Proyecto } from '../_model/proyecto';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ProyectoService {

   /*proyectos: Proyecto[]=[
    new Proyecto(1,"SpringRestful","http://svn.redlink.com.ar/svn/automatizacion/branches/springrestful"),
    new Proyecto(2,"Providers","http://svn.redlink.com.ar/svn/automatizacion/branches/providers")];*/
  private url:string  = 'http://localhost:8080/projects';
 
   

  constructor(private http: HttpClient){ }

  getProyectos(){
  //return this.proyectos;

  return this.http.get<Proyecto[]>(`${this.url}/all/`, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  });
}
  getProyecto(id:number){
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }

  actualizarProyecto(nuevoProyecto:Proyecto)
  {

  }
  agregarProyecto(nuevoProyecto:Proyecto){
    return this.http.post(`${this.url}/create/`,nuevoProyecto.projectUrl).subscribe(data=>{console.log(data);});
    /*).subscribe(data => {      
      if (data === 1) {
        this.getPlatos().subscribe(platos => {
          this.platosCambio.next(platos);
        });
      }
    });
  }
 */
  }
}
