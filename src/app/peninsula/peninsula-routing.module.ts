import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeninsulaPage } from './peninsula.page';

const routes: Routes = [
  {
    path: '',
    component: PeninsulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeninsulaPageRoutingModule {}
