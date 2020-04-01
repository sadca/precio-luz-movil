import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-precios-hora-ayuda',
  templateUrl: './precios-hora-ayuda.component.html',
  styleUrls: ['./precios-hora-ayuda.component.scss']
})
export class PreciosHoraAyudaComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
