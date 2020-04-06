import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { tarifas } from '../../config/constantes';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
})
export class AjustesPage implements OnInit {
  tarifa: string;
  tarifas = tarifas;

  constructor(public storage: Storage) {}

  async ngOnInit() {
    await this.storage.get('tarifa').then((valor) => {
      if (valor !== undefined && valor !== null) {
        this.tarifa = valor;
      } else {
        this.tarifa = '2.0A';
      }
    });
  }

  cambioTarifa(valor: boolean) {
    this.storage.set('tarifa', valor);
  }
}
