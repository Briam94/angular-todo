import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './services/task.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';

import { AppRoutingModule } from './app.routes';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AddProyectoComponent } from './components/add-proyecto/add-proyecto.component';

import { ProyectoService } from './services/proyecto.service';
import { RegistroComponent } from './components/registro/registro.component';
import { AddRegistroComponent } from './components/add-registro/add-registro.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    InicioComponent,
    HeaderComponent,
    ProyectosComponent,
    AddProyectoComponent,
    RegistroComponent,
    AddRegistroComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
  	FormsModule,
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features    
  ],
  providers: [TaskService,
              ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
