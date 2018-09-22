import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


	usuario: UsuarioInterface = {
		nombre: '',
		contrasena: ''
	}

	constructor(private loginService: LoginService) {}

  ngOnInit() {
  }

	onBuscarUsuario(myForm: NgForm) {
		if (myForm.valid == true) {
			this.loginService.buscarUsario(this.usuario);
		} else {
			alert('Usuario o contraseña Invalidos')			
		}
	}

}
