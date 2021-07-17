import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CategoriaPage } from './categoria.page';
import { HttpClientModule } from '@angular/common/http';

import { CategoriaPageRoutingModule } from './categoria-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CategoriaPage]
})
export class CategoriaPageModule {}
