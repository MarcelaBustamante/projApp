import { Proyecto } from './../../_model/proyecto';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-proyecto-edicion',
  templateUrl: './proyecto-edicion.component.html',
  styleUrls: ['./proyecto-edicion.component.css']
})
export class ProyectoEdicionComponent implements OnInit {
  proyecto: Proyecto;
  constructor() { }

  ngOnInit() {
    this.proyecto = new Proyecto(1,"hola","piola",null);
  }

}
