import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { CambiarContrasenaPageRoutingModule } from './cambiar-contrasena-routing.module';

import { CambiarContrasenaPage } from './cambiar-contrasena.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarContrasenaPageRoutingModule
  ],
  declarations: [CambiarContrasenaPage]
})
export class CambiarContrasenaPageModule {}
