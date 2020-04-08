import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ahorrar-factura-ayuda',
  templateUrl: './ahorrar-factura-ayuda.component.html',
  styleUrls: ['./ahorrar-factura-ayuda.component.scss'],
})
export class AhorrarFacturaAyudaComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
