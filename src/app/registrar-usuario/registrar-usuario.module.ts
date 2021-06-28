import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegistrarUsuarioPageRoutingModule } from './registrar-usuario-routing.module';

import { RegistrarUsuarioPage } from './registrar-usuario.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarUsuarioPageRoutingModule
  ],
  declarations: [RegistrarUsuarioPage]
})
export class RegistrarUsuarioPageModule {}
