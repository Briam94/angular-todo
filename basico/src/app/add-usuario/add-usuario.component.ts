import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioInterface } from '../models/usuariosInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {
	usuario: UsuarioInterface = {
		id: '',
		nombre: '',
		apellido: '',
		usuario: '',
		contrasena: ''
	};

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

  }

  onGuardarUsuario(myForm: NgForm){
	  this.usuarioService.addUsuario();
  }

}
