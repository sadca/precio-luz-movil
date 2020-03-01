import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhorrarFacturaPageRoutingModule } from './ahorrar-factura-routing.module';

import { AhorrarFacturaPage } from './ahorrar-factura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhorrarFacturaPageRoutingModule
  ],
  declarations: [AhorrarFacturaPage]
})
export class AhorrarFacturaPageModule {}
