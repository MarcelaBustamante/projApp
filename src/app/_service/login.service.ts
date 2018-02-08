import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  logeado:boolean=false;

  constructor() { }

  login(){
    this.logeado=true;
    return this.logeado;
  }

  estaLogeado(){
    return this.logeado;
  }

  cerrarSesion(){
    this.logeado = false;
  }

}
