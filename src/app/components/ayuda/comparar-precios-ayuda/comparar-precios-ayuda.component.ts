import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comparar-precios-ayuda',
  templateUrl: './comparar-precios-ayuda.component.html',
  styleUrls: ['./comparar-precios-ayuda.component.scss']
})
export class CompararPreciosAyudaComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
