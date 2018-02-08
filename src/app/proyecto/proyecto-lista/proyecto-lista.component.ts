import { Proyecto } from './../../_model/proyecto';
import { Router,ActivatedRoute } from '@angular/router';
import { ProyectoService } from './../../_service/proyecto.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-proyecto-lista',
  templateUrl: './proyecto-lista.component.html',
  styleUrls: ['./proyecto-lista.component.css']
})
export class ProyectoListaComponent implements OnInit {
    proyectos: Proyecto[] ;
    filterQuery= "";

  constructor(private proyectoService: ProyectoService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
  // this.proyectos = this.proyectoService.getProyectos();
   this.proyectoService.getProyectos().subscribe(data =>{
     this.proyectos=data;
   });
  }

  crearNuevoProyecto(){
    this.router.navigate(['nuevo'],{relativeTo:this.route});
  }
}
