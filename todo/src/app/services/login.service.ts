import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UsuarioInterface } from '../models/usuarioInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	usuariosCollection: AngularFirestoreCollection<UsuarioInterface>;
	usuarios: Observable<UsuarioInterface[]>;
	usuarioDoc: AngularFirestoreDocument<UsuarioInterface>;

	constructor(public afs: AngularFirestore, private router: Router) {
	 this.usuarios = afs.collection('usuarios').valueChanges();	

  }

	buscarUsario(usuario: UsuarioInterface) {
		if (usuario.nombre == "brian" && usuario.contrasena == "brian") {
			console.log('acceso concedido');
			this.router.navigate(['/inicio']);
		}
		if (usuario.nombre == "admin" && usuario.contrasena == "admin") {
			console.log('acceso concedido');
			this.router.navigate(['/inicio']);
		} 
		else {
			alert('usuario o contraseña incorrecto');
		}
	}
}
