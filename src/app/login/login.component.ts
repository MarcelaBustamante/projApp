import { LoginService } from './../_service/login.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router/src/config';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensaje:string;

  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit() {
  }

  iniciarSesion(form:NgForm){
    this.loginService.login();
    this.router.navigate(['proyecto']);
  }

}
