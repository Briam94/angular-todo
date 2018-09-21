import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	usuarios: UsuarioInterface[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  	this.usuarioService.getUsuarios().subscribe( usuarios => {
			//console.log(usuarios);
			this.usuarios = usuarios;
  	})
  }

}
