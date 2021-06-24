import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValoracionesOpinionesPageRoutingModule } from './valoraciones-opiniones-routing.module';

import { ValoracionesOpinionesPage } from './valoraciones-opiniones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValoracionesOpinionesPageRoutingModule
  ],
  declarations: [ValoracionesOpinionesPage]
})
export class ValoracionesOpinionesPageModule {}
