import { Router,ActivatedRoute } from '@angular/router';
import { ProyectoService } from './../../_service/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../_model/proyecto';


@Component({
  selector: 'app-proyecto-lista',
  templateUrl: './proyecto-lista.component.html',
  styleUrls: ['./proyecto-lista.component.css']
})
export class ProyectoListaComponent implements OnInit {
    proyectos: Proyecto[];
    filterQuery= "";

  constructor(private proyectoService: ProyectoService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    //this.proyectos = this.proyectoService.getProyecto();
    this.proyectoService.getProyectos().subscribe(data =>{
    this.proyectos=data;
    console.log(this.proyectos);});
  }

  crearNuevoProyecto(){
    this.router.navigate(['nuevo'],{relativeTo:this.route});
  }
}
