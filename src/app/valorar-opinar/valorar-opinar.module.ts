import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorarOpinarPageRoutingModule } from './valorar-opinar-routing.module';

import { ValorarOpinarPage } from './valorar-opinar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorarOpinarPageRoutingModule
  ],
  declarations: [ValorarOpinarPage]
})
export class ValorarOpinarPageModule {}
