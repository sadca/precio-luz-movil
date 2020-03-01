import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhorrarFacturaPageRoutingModule } from './ahorrar-factura-routing.module';

import { AhorrarFacturaPage } from './ahorrar-factura.page';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhorrarFacturaPageRoutingModule,
    FileUploadModule
  ],
  declarations: [AhorrarFacturaPage, MultiFileUploadComponent]
})
export class AhorrarFacturaPageModule {}
