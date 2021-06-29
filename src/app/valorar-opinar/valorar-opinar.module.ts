import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { ValorarOpinarPageRoutingModule } from './valorar-opinar-routing.module';

import { ValorarOpinarPage } from './valorar-opinar.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ValorarOpinarPageRoutingModule
  ],
  declarations: [ValorarOpinarPage]
})
export class ValorarOpinarPageModule {}
