import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValoracionesOpinionesPage } from './valoraciones-opiniones.page';

const routes: Routes = [
  {
    path: '',
    component: ValoracionesOpinionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValoracionesOpinionesPageRoutingModule {}
