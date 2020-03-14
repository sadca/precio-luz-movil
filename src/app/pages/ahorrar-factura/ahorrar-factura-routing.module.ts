import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AhorrarFacturaPage } from './ahorrar-factura.page';

const routes: Routes = [
  {
    path: '',
    component: AhorrarFacturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AhorrarFacturaPageRoutingModule {}
