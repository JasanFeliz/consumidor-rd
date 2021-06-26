import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialOpinionesPageRoutingModule } from './historial-opiniones-routing.module';

import { HistorialOpinionesPage } from './historial-opiniones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialOpinionesPageRoutingModule
  ],
  declarations: [HistorialOpinionesPage]
})
export class HistorialOpinionesPageModule {}
