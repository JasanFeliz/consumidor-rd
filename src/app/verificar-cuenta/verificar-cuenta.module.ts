import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { VerificarCuentaPageRoutingModule } from './verificar-cuenta-routing.module';

import { VerificarCuentaPage } from './verificar-cuenta.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarCuentaPageRoutingModule
  ],
  declarations: [VerificarCuentaPage]
})
export class VerificarCuentaPageModule {}
