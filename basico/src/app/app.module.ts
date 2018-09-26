import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { InicioComponent } from './inicio/inicio.component';

import { AppRoutingModule } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { UsuarioService } from './services/usuario.service';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    InicioComponent,
    MenuComponent,
    RegistroComponent,
    LoginComponent,
    AddUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular6crud'),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
