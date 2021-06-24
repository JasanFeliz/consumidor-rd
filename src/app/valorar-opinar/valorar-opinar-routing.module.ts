import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorarOpinarPage } from './valorar-opinar.page';

const routes: Routes = [
  {
    path: '',
    component: ValorarOpinarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorarOpinarPageRoutingModule {}
