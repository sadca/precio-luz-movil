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
      console.log(valor);
      if (valor !== undefined && valor !== null) {
        this.tarifa = valor;
      } else {
        this.storage.set('tarifa', '20A');
        this.tarifa = '20A';
      }
    });
  }

  cambioTarifa(valor: boolean) {
    this.storage.set('tarifa', valor);
  }
}
