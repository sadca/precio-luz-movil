import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreciosHoraPage } from './precios-hora.page';

const routes: Routes = [
  {
    path: '',
    component: PreciosHoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreciosHoraPageRoutingModule {}
