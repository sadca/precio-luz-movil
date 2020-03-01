import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html'
})
export class AjustesPage implements OnInit {
  empresa: boolean;
  peninsula: string;

  constructor(public storage: Storage) {}

  async ngOnInit() {
    await this.storage.get('empresa').then(valor => {
      this.empresa = valor;
      console.log('empresa', valor);
    });
    await this.storage.get('peninsula').then(valor => {
      this.peninsula = valor;
      console.log('peninsula', valor);
    });
  }

  cambioPeninsula(valor: string) {
    this.storage.set('peninsula', valor);
  }

  cambioEmpresa(valor: boolean) {
    this.storage.set('empresa', valor);
  }
}
