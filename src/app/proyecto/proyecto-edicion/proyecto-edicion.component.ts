import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';


import { ProyectoService } from '../../_service/proyecto.service';
import { Proyecto } from './../../_model/proyecto';



@Component({
  selector: 'app-proyecto-edicion',
  templateUrl: './proyecto-edicion.component.html',
  styleUrls: ['./proyecto-edicion.component.css']
})
export class ProyectoEdicionComponent implements OnInit {

  id: number;
  edicion: boolean = false;
  titulo:string;
  form: FormGroup

  constructor(private route: ActivatedRoute, private proyectoService: ProyectoService, private router: Router) {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'nombre': new FormControl(''),
      'urlProyecto': new FormControl(''),
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.edicion = params['id'] != null;
      this.initForm();
    }
    );
    this.edicion?this.titulo="Editar Proyecto":this.titulo="Nuevo Proyecto"  }

  operar() {
    let nuevoProyecto = new Proyecto(this.form.value['id'], this.form.value['nombre'], this.form.value['urlProyecto'],null);

    if (this.edicion) {
      this.proyectoService.actualizarProyecto(nuevoProyecto)
    } else {
      this.proyectoService.agregarProyecto(nuevoProyecto);
    }
  }

  private initForm() {
    if (this.edicion) {
      this.proyectoService.getProyecto(this.id).subscribe(data => {
        let id = 0;
        let nombre = '';
        let urlProyecto = '';
        id = data.projectId;
        nombre = data.name;
        urlProyecto = data.projectUrl;
        this.form = new FormGroup({
          'id': new FormControl(id),
          'nombre': new FormControl(nombre),
          'urlProyecto': new FormControl(urlProyecto)
        });
      });
    }
  }

}
