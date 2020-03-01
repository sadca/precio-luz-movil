import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeninsulaPageRoutingModule } from './peninsula-routing.module';

import { PeninsulaPage } from './peninsula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeninsulaPageRoutingModule
  ],
  declarations: [PeninsulaPage]
})
export class PeninsulaPageModule {}
