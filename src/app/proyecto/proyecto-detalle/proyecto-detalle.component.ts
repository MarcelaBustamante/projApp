import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../_model/proyecto';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProyectoService } from '../../_service/proyecto.service';

@Component({
  selector: 'app-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.css']
})
export class ProyectoDetalleComponent implements OnInit {
  proyecto: Proyecto;
  id:number;
  constructor(private proyectoService: ProyectoService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=params['id']//es el que viene definido en el routing
        console.log(this.id);
       this.proyectoService.getProyecto(this.id).subscribe(data =>{
        this.proyecto=data;
        console.log(this.proyecto);})  
          }
    )
  }
  editarProyecto(){
    this.router.navigate(['editar'],{relativeTo: this.route});
  }
}
