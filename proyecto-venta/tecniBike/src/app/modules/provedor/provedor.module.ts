import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvedorComponent } from './provedor.component';

import { environment } from '../../../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { ProveedorService } from '../services/proveedor.service';
import { ProveedorRoutingModule } from ./proveedor-reouting

@NgModule({
  imports: [
	AngularFireModule.initializeApp(environment.firebaseConfig, 'tecnibike'),
	AngularFirestoreModule,
    CommonModule
  ],
  declarations: [ProvedorComponent],
  providers: [ProveedorService]
})
export class ProvedorModule { }
