import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { ProveedorService } from './modules/services/proveedor.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashBoardComponent
  ],
  imports: [
	AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'tecnibike'),
    AngularFirestoreModule
  ],
  providers: [ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
