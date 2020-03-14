import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreciosHoraPageRoutingModule } from './precios-hora-routing.module';

import { PreciosHoraPage } from './precios-hora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreciosHoraPageRoutingModule
  ],
  declarations: [PreciosHoraPage]
})
export class PreciosHoraPageModule {}
