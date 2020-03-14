import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactarPage } from './contactar.page';

const routes: Routes = [
  {
    path: '',
    component: ContactarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactarPageRoutingModule {}
