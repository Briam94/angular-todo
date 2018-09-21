import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-registro',
  templateUrl: './add-registro.component.html',
  styleUrls: ['./add-registro.component.css']
})
export class AddRegistroComponent implements OnInit {

	usuario: UsuarioInterface = {
		nombre: '',
		contrasena: ''
	}

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

  }

	onGuardarUsuario(myForm: NgForm){
		this.usuarioService.addUsuario(this.usuario);
	}

}
